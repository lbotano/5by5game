import * as PIXI from 'pixi.js';

import Game from '@app/Game.class';
import Keyboard from '@app/Keyboard.class';

export default class Player {
    private keyboard: Keyboard = new Keyboard();

    private game: Game;
    private sheet: PIXI.Spritesheet;
    public sprite: PIXI.Sprite;

    private velocity: number     = 0.0;
    private acceleration: number = 0.0;

    private readonly GRAVITY: number = 1;
    private readonly ROTATION_RANGE: number = 50; // Smaller means more rotation range
    private readonly COLLIDER_MARGIN: number = 20; // Number in pixels, if the sprite is 50x50 and this constant is 10, the collider will be 40x40

    private jumpSound = new Audio('./assets/audio/jump.mp3');

    constructor(game: Game) {
        this.game = game;

        // Initialize variables
        this.sheet = PIXI.Loader.shared.resources['./assets/img/spritesheet.json'].spritesheet;
        this.sprite = new PIXI.Sprite(this.sheet.textures['player.png']);

        // Put pivot at the center
        this.sprite.pivot.set(this.sprite.width / 2, this.sprite.height / 2);

        // Scale player
        this.sprite.scale.set(this.game.PIXEL_SCALE);

        // Add player
        this.game.app.stage.addChild(this.sprite);

        // Positionate player
        this.sprite.position.x = this.game.app.screen.width / 3 - this.sprite.width / 3;
        this.sprite.position.y = this.game.app.screen.height / 3 - this.sprite.height / 3;
    }

    public update(delta: number): void {
        // Apply physics
        this.velocity           += this.acceleration * delta;
        this.sprite.position.y  += this.velocity * delta;

        // Rotate player according to velocity
        const rotation: number = .5 * Math.PI + this.velocity / this.ROTATION_RANGE;
        this.sprite.rotation = rotation;

        // Manage input
        if (this.keyboard.isPressed("Space") && this.velocity >= this.GRAVITY / 1000) {
            this.jumpSound.play();
            this.acceleration = 0;
            this.velocity = -this.GRAVITY * 20;
        } else {
            this.acceleration += this.GRAVITY * delta;
        }

        if (this.acceleration > this.GRAVITY) {
            this.acceleration = this.GRAVITY;
        }

    }

    private graphics: PIXI.Graphics;

    public getBounds(): PIXI.Rectangle {
        return new PIXI.Rectangle(
            this.sprite.position.x - this.sprite.width / 2 + this.COLLIDER_MARGIN / 2,
            this.sprite.position.y - this.sprite.height / 2 + this.COLLIDER_MARGIN / 2,
            this.sprite.width - this.COLLIDER_MARGIN / 2,
            this.sprite.height - this.COLLIDER_MARGIN / 2);
    }

    public destroy(): void {
        this.game.app.stage.removeChild(this.sprite);
    }
}