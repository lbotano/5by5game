import * as PIXI from 'pixi.js';
import MobileDetect = require('mobile-detect');

import Player from '@app/Player.class';
import Pipes from '@app/Pipes.class';
import areColliding from '@app/Collision.module';
import Keyboard from '@app/Keyboard.class';
import Pipe from './Pipe.class';
import NumberSprite from './NumberSprite.class';
import NumberLabel from './NumberLabel.class';
import Tooltip from './Tooltip.class';

export default class Game {
    public app: PIXI.Application = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0x42a7f5
    });
    public mobileDetect: MobileDetect = new MobileDetect(window.navigator.userAgent);

    private player: Player;
    private pipes: Pipes;
    private scoreLabel: NumberLabel;
    private tooltip: Tooltip;

    private keyboard: Keyboard = new Keyboard();
    private isGameStarted: boolean = false;
    private hasLost: boolean = false;
    private canRestart: boolean = false;
    private lastCollider: Pipe;

    private score: number = 0;
    private scoreSound = new Audio('./assets/audio/point.mp3');

    private readonly RESTART_DELAY: number = 200; // Time before the player can restart the game
    public readonly PIXEL_SCALE: number = 4;
    
    constructor() {
        // Set scale mode to nearest neighbour
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        document.body.appendChild(this.app.view);

        PIXI.Loader.shared.add('./assets/img/spritesheet.json').load(() => {
            this.player = new Player(this);
            this.pipes = new Pipes(this);
            this.scoreLabel = new NumberLabel(this);
            this.tooltip = new Tooltip(this);

            // Add update routine
            this.app.ticker.add((delta) => {this.update(delta)});

            // Resize game to window size
            this.resizeToScreen();
            window.addEventListener('resize', () => this.resizeToScreen());
        });
    }

    update(delta: number): void {
        if (this.isGameStarted) {
            if (!this.hasLost) {
                this.player.update(delta);
                this.pipes.update(delta);
                
                const playerBounds = this.player.getBounds();
                // Check for ceiling and ground collisions
                if (playerBounds.y <= 0 || playerBounds.y + playerBounds.height >= this.app.renderer.height)
                    this.lose();

                // Check for wall collitions
                for (const pipe of this.pipes.sectionList) {
                    if (areColliding(playerBounds, pipe.getBottomBounds()) || areColliding(playerBounds, pipe.getTopBounds())) {
                        this.lose()
                    } else if (areColliding(playerBounds, pipe.getHoleBounds())) {
                        // lastCollider prevents the score from being summed multiple times with the same pipe
                        if (this.lastCollider !== pipe) {
                            this.sumScore();
                            this.scoreSound.play();
                            this.lastCollider = pipe;
                        }
                    }
                }
            } else {
                if (this.isPressed() && this.canRestart)
                    this.reset();
            }
        } else {
            if (this.isPressed()) {
                this.tooltip.setVisibility(false);
                this.isGameStarted = true;
            }
        }
    }

    /*
     * Returns if the space key is pressed or click depending of the device
     */
    public isPressed(): boolean {
        return  /*this.mobileDetect.mobile() &&*/ this.keyboard.isPressed('tap') ||
                this.keyboard.isPressed('Space');
    }

    private sumScore(): void {
        this.score++;
        this.scoreLabel.setValue(this.score);
    }

    private resetScore(): void {
        this.score = 0;
        this.scoreLabel.setValue(this.score);
    }

    private lose(): void {
        this.hasLost = true;
        this.app.renderer.backgroundColor = 0xdd675d;
        this.tooltip.setVisibility(true);
        setTimeout(() => {
            this.canRestart = true;
        }, this.RESTART_DELAY);
    }

    private reset(): void {
        this.resetScore();
        this.canRestart = false;
        // Reset player
        this.player.destroy();
        this.player = new Player(this);
        // Reset pipes
        this.pipes.destroy();
        this.pipes = new Pipes(this);

        // Reset background color
        this.app.renderer.backgroundColor = 0x42a7f5;

        // Reset tooltip
        this.tooltip.setVisibility(false);

        this.hasLost = false;
    }

    private resizeToScreen(): void {
        this.app.renderer.view.width = window.innerWidth;
        this.app.renderer.view.height = window.innerHeight;

        this.scoreLabel.resize();
        this.tooltip.resize();
    }
}