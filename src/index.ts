import * as PIXI from 'pixi.js';
import Player from './app/Player.class';
import Pipes from './app/Pipes.class';
import areColliding from '@app/Collision.module';
import Pipe from '@app/Pipe.class';
import { debug } from 'webpack';
import Keyboard from '@app/Keyboard.class';

const app = new PIXI.Application({
    width: 1280,
    height: 720,
    backgroundColor: 0x42a7f5
});

class Game {
    private player: Player;
    private pipes: Pipes;
    private keyboard: Keyboard = new Keyboard();

    private isGameStarted: boolean = false;
    private hasLost: boolean = false;
    private canRestart: boolean = false;

    private readonly RESTART_DELAY: number = 200; // Time before the player can restart the game
    
    constructor() {

        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        document.body.appendChild(app.view);

        PIXI.Loader.shared.add('./assets/img/textures.json').load(() => {
            this.player = new Player(app);
            this.pipes = new Pipes(app);

            app.ticker.add((delta) => {this.update(delta)});
        });
    }

    update(delta: number): void {
        if (this.isGameStarted) {
            if (!this.hasLost) {
                this.player.update(delta);
                this.pipes.update(delta);
                
                const playerBounds = this.player.getBounds();
                // Check for ceiling and ground collisions
                if (playerBounds.y <= 0 || playerBounds.y + playerBounds.height >= app.renderer.height)
                    this.lose();

                // Check for wall collitions
                for (const pipe of this.pipes.sectionList) {
                    if (areColliding(playerBounds, pipe.getBottomBounds()) || areColliding(playerBounds, pipe.getTopBounds()))
                        this.lose();
                }
            } else {
                if (this.keyboard.isPressed("Space") && this.canRestart)
                    this.reset();
            }
        } else {
            if (this.keyboard.isPressed("Space"))
                this.isGameStarted = true;
        }
    }

    private lose(): void {
        this.hasLost = true;
        app.renderer.backgroundColor = 0xdd675d;
        setTimeout(() => {
            this.canRestart = true;
        }, this.RESTART_DELAY);
    }

    private reset(): void {
        this.canRestart = false;
        // Reset player
        this.player.destroy();
        this.player = new Player(app);
        // Reset pipes
        this.pipes.destroy();
        this.pipes = new Pipes(app);

        // Reset background color
        app.renderer.backgroundColor = 0x42a7f5;

        this.hasLost = false;
    }
}

new Game();