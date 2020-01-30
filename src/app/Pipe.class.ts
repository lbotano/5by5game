import * as PIXI from 'pixi.js';
import Game from './Game.class';

export default class Pipe {
    private game: Game;
    private sheet: PIXI.Spritesheet;
    private texture: PIXI.Texture;
    public sprites: Array<PIXI.Sprite> = new Array<PIXI.Sprite>();

    private holeY: number = 0.0;
    public posX: number = 0.0;
    private blockCount: number;

    private readonly BLOCK_SIZE: number = 5 * 6;
    private readonly HOLE_SIZE: number = 10;

    constructor(game: Game) {
        this.game = game;

        // Load textures
        this.sheet = PIXI.Loader.shared.resources['./assets/img/textures.json'].spritesheet;
        this.texture = this.sheet.textures['blocks/sand.png'];

        this.blockCount = Math.ceil((this.game.app.renderer.height / this.BLOCK_SIZE) - this.HOLE_SIZE);
    }

    // This is a function separate from the constructor so there is space at the beginning
    public calculateObstacle(): void {
        const minY = 2;
        const maxY = (this.game.app.renderer.height / this.BLOCK_SIZE) - this.HOLE_SIZE - 2;
        this.holeY = Math.ceil(Math.random() * (maxY - minY) + minY);
        for (let i = 0; i < this.blockCount; i++) {
            const sprite = new PIXI.Sprite(this.texture);
            sprite.scale = new PIXI.Point(6, 6);
            this.sprites.push(sprite);
            this.game.app.stage.addChild(sprite);
        }
    }

    public update(delta: number): void {
        let i: number = 0;
        for (const sprite of this.sprites) {
            sprite.position = new PIXI.Point(this.posX, i * this.BLOCK_SIZE);
            i++;
            if (i === this.holeY) i += this.HOLE_SIZE;
        }
    }

    public destroy(): void {
        for (const sprite of this.sprites) {
            this.game.app.stage.removeChild(sprite);
        }
    }

    public getTopBounds(): PIXI.Rectangle {
        return new PIXI.Rectangle(
            this.posX,
            0,
            this.BLOCK_SIZE,
            this.holeY * this.BLOCK_SIZE);
    }

    public getBottomBounds(): PIXI.Rectangle {
        if (this.holeY === 0) return new PIXI.Rectangle();

        const holeBottomY: number = (this.holeY + this.HOLE_SIZE) * this.BLOCK_SIZE;
        return new PIXI.Rectangle(
            this.posX,
            holeBottomY,
            this.BLOCK_SIZE,
            this.game.app.renderer.height - holeBottomY
        );
    }

    public getHoleBounds(): PIXI.Rectangle {
        if (this.holeY === 0) return new PIXI.Rectangle();

        return new PIXI.Rectangle(
            this.posX,
            this.holeY * this.BLOCK_SIZE,
            this.BLOCK_SIZE,
            this.game.app.renderer.height - (this.holeY + this.HOLE_SIZE) * this.BLOCK_SIZE
        );
    }
}