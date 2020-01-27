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

    private readonly GRAVITY: number = 1;
    private readonly ROTATION_RANGE: number = 50; // Smaller means more rotation range
    private readonly COLLIDER_MARGIN: number = 20; // Number in pixels, if the sprite is 50x50 and this constant is 10, the collider will be 40x40

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
        const rotation: number = .5 * Math.PI + this.velocity / this.ROTATION_RANGE;
        this.sprite.rotation = rotation;


        // Change appearance depending on the velocity
        if (this.velocity > 0) {
            this.sprite.texture = this.textures[2];
        } else {
            this.sprite.texture = this.textures[0];
        }

        // Manage input
        if (this.keyboard.isPressed("Space") && this.velocity >= this.GRAVITY / 1000) {
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
        this.app.stage.removeChild(this.graphics);
        this.graphics = new PIXI.Graphics();

        this.graphics.beginFill(0xff00ff);
        this.graphics.alpha = 0.1;
        this.graphics.drawRect(this.sprite.position.x - this.sprite.width / 2 + this.COLLIDER_MARGIN / 2, this.sprite.position.y - this.sprite.height / 2 + this.COLLIDER_MARGIN / 2, this.sprite.width - this.COLLIDER_MARGIN / 2, this.sprite.height - this.COLLIDER_MARGIN / 2);
        this.app.stage.addChild(this.graphics);
        //this.app.stage.removeChild(graphics);

        return new PIXI.Rectangle(
            this.sprite.position.x - this.sprite.width / 2 + this.COLLIDER_MARGIN / 2,
            this.sprite.position.y - this.sprite.height / 2 + this.COLLIDER_MARGIN / 2,
            this.sprite.width - this.COLLIDER_MARGIN / 2,
            this.sprite.height - this.COLLIDER_MARGIN / 2);
    }
}