import * as PIXI from 'pixi.js';

export default class Player {
    private app: PIXI.Application;
    private sheet: PIXI.Spritesheet;
    private textures: PIXI.Texture[];
    public sprite: PIXI.Sprite;

    private ready: boolean = false;

    private velocity: number     = 0.0;
    private acceleration: number = 0.0;

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

        this.sprite.scale = new PIXI.Point(6, 6);

        this.app.stage.addChild(this.sprite);

        this.ready = true;
    }

    public update(delta: number): void {
        if (!this.ready) {
            return
        }
        this.sprite.texture = this.textures[0];
    }
}