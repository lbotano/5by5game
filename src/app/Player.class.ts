import * as PIXI from 'pixi.js';

import Keyboard from '@app/Keyboard.class';

export default class Player {
    private keyboard: Keyboard = new Keyboard();

    private app: PIXI.Application;
    private sheet: PIXI.Spritesheet;
    private textures: PIXI.Texture[];
    public sprite: PIXI.Sprite;

    private ready: boolean = false;

    private velocity: number     = 0.0;
    private acceleration: number = 0.0;
    private readonly gravity: number = 1;;

    constructor(app: PIXI.Application) {
        this.app = app;

        PIXI.Loader.shared.add('./assets/img/textures.json').load(() => {this.spritesLoaded()});
    }

    private spritesLoaded(): void {
        // Initialize variables
        console.log("sprites loaded :)");
        this.sheet = PIXI.Loader.shared.resources['./assets/img/textures.json'].spritesheet;
        this.textures = [
            this.sheet.textures['player/player_00.png'],
            this.sheet.textures['player/player_01.png'],
            this.sheet.textures['player/player_02.png']
        ];
        this.sprite = new PIXI.Sprite(this.textures[0]);

        // Escalar jugador
        this.sprite.scale = new PIXI.Point(6, 6);

        // Añadir jugador
        this.app.stage.addChild(this.sprite);

        // Posicionar jugador
        this.sprite.position.x = this.app.screen.width / 2 - this.sprite.width / 2;
        this.sprite.position.y = this.app.screen.height / 2 - this.sprite.height / 2;

        this.ready = true;
    }

    public update(delta: number): void {
        // If textures aren't loaded don't run this function
        if (!this.ready) {
            return;
        }

        // Apply physics
        this.velocity           += this.acceleration /** delta*/;
        this.sprite.position.y  += this.velocity /** delta*/;

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
            this.acceleration += this.gravity /** delta*/;
        }

        if (this.acceleration > this.gravity) {
            this.acceleration = this.gravity;
        }

    }
}