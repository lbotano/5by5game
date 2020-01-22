import * as PIXI from 'pixi.js';

import Keyboard from '@app/Keyboard.class';

export default class Player {
    private keyboard: Keyboard = new Keyboard();

    private app: PIXI.Application;
    private sheet: PIXI.Spritesheet;
    private textures: PIXI.Texture[];
    public sprite: PIXI.Sprite;

    private velocity: number     = 0.0;
    private acceleration: number = 0.0;

    private readonly gravity: number = 1;
    private readonly rotationRange: number = 50; // Smaller means more rotation range

    constructor(app: PIXI.Application) {
        this.app = app;

        // Initialize variables
        this.sheet = PIXI.Loader.shared.resources['./assets/img/textures.json'].spritesheet;
        this.textures = [
            this.sheet.textures['player/player_00.png'],
            this.sheet.textures['player/player_01.png'],
            this.sheet.textures['player/player_02.png']
        ];
        this.sprite = new PIXI.Sprite(this.textures[0]);

        // Put pivot at the center
        this.sprite.pivot.set(this.sprite.width / 2, this.sprite.height / 2);

        // Scale player
        this.sprite.scale = new PIXI.Point(6, 6);

        // Add player
        this.app.stage.addChild(this.sprite);

        // Positionate player
        this.sprite.position.x = this.app.screen.width / 3 - this.sprite.width / 3;
        this.sprite.position.y = this.app.screen.height / 3 - this.sprite.height / 3;
    }

    public update(delta: number): void {
        // Apply physics
        this.velocity           += this.acceleration * delta;
        this.sprite.position.y  += this.velocity * delta;

        // Rotate player according to velocity
        let rotation: number = .5 * Math.PI + this.velocity / this.rotationRange;
        if (rotation > Math.PI) {
            rotation = Math.PI;
        } else if (rotation < 0) {
            rotation = 0;
        }
        this.sprite.rotation = rotation;


        // Change appearance depending on the velocity
        if (this.velocity > 0) {
            this.sprite.texture = this.textures[2];
        } else {
            this.sprite.texture = this.textures[0];
        }

        // Manage input
        if (this.keyboard.isPressed("Space") && this.velocity >= this.gravity / 1000) {
            this.acceleration = 0;
            this.velocity = -this.gravity * 20;
        } else {
            this.acceleration += this.gravity * delta;
        }

        if (this.acceleration > this.gravity) {
            this.acceleration = this.gravity;
        }

    }

    public getBounds(): PIXI.Bounds {
        return new PIXI.Bounds()
    }
}