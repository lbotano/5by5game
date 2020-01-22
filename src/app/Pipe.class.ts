import * as PIXI from 'pixi.js';

export default class Pipe {
    private app: PIXI.Application;
    private sheet: PIXI.Spritesheet;
    private texture: PIXI.Texture;
    public sprites: Array<PIXI.Sprite> = new Array<PIXI.Sprite>();

    private holeY: number = 0.0;
    public posX: number = 0.0;
    private blockCount: number;

    private readonly HOLE_SIZE: number = 7;

    constructor(app: PIXI.Application) {
        this.app = app;

        // Load textures
        this.sheet = PIXI.Loader.shared.resources['./assets/img/textures.json'].spritesheet;
        this.texture = this.sheet.textures['blocks/sand.png'];

        this.blockCount = Math.ceil((this.app.renderer.height / (5 * 6)) - this.HOLE_SIZE);
    }

    // This is a function separate from the constructor so there is space at the beginning
    public calculateObstacle(): void {
        this.holeY = Math.ceil(Math.random() * this.app.renderer.height / (5 * 6));
        for (let i = 0; i < this.blockCount; i++) {
            const sprite = new PIXI.Sprite(this.texture);
            sprite.scale = new PIXI.Point(6, 6);
            this.sprites.push(sprite);
            this.app.stage.addChild(sprite);
        }
    }

    public update(delta: number): void {
        let i: number = 0;
        for (const sprite of this.sprites) {
            sprite.position = new PIXI.Point(this.posX, i * 5 * 6);
            i++;
            if (i === this.holeY) i += this.HOLE_SIZE;
        }
    }

    public destroy(): void {
        for (const sprite of this.sprites) {
            this.app.stage.removeChild(sprite);
        }
    }
}