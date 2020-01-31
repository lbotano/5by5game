import * as PIXI from 'pixi.js';
window.PIXI = PIXI;
import 'pixi-layers';
import Game from '@app/Game.class';

export default class NumberSprite {
    public game: Game;

    private sheet: PIXI.Spritesheet;
    private textures: PIXI.Texture[];
    public sprite: PIXI.Sprite;

    constructor(game: Game, value: number, x: number, y: number) {
        this.game = game;

        this.sheet = PIXI.Loader.shared.resources['./assets/img/spritesheet.json'].spritesheet;
        this.textures = [
            this.sheet.textures['number0.png'],
            this.sheet.textures['number1.png'],
            this.sheet.textures['number2.png'],
            this.sheet.textures['number3.png'],
            this.sheet.textures['number4.png'],
            this.sheet.textures['number5.png'],
            this.sheet.textures['number6.png'],
            this.sheet.textures['number7.png'],
            this.sheet.textures['number8.png'],
            this.sheet.textures['number9.png']
        ];
        this.sprite = new PIXI.Sprite(this.textures[value]);
        
        this.sprite.position.x = x;
        this.sprite.position.y = y;
        this.sprite.scale.set(this.game.PIXEL_SCALE);

        this.game.app.stage.addChild(this.sprite);
    }

    public destroy(): void {
        this.game.app.stage.removeChild(this.sprite);
    }
}