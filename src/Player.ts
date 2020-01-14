import * as PIXI from 'pixi.js';

import Coord from './util/Coord';
import Keyboard from './util/Keyboard';

export default class Player {
    app: PIXI.Application;
    sheet: PIXI.LoaderResource;
    sprite: PIXI.Sprite;
    
    velocity: Coord = new Coord();

    goLeft: boolean = false;
    goRight: boolean = false;

    constructor(app: PIXI.Application) {
        this.app = app;

        new Keyboard('ArrowLeft', () => {
            this.goLeft = true;
        },() => {
            this.goLeft = false;
        });

        new Keyboard('ArrowRight', () => {
            this.goRight = true;
        }, () => {
            this.goRight = false;
        });
    }

    public setSheet(sheet: PIXI.LoaderResource): void {
        this.sheet = sheet;
        this.sprite = new PIXI.Sprite(this.sheet.textures['player/player_00.png']);
        this.app.stage.addChild(this.sprite);

        this.sprite.width *= 10;
        this.sprite.height *= 10;
        this.sprite.x = this.app.screen.width / 2;
        this.sprite.y = this.app.screen.height / 2;
    }

    public update(): void {
        if (this.goLeft) {
            this.velocity.x = -10;
        } else if (this.goRight) {
            this.velocity.x = 10;
        } else {
            this.velocity.x = 0;
        }

        this.sprite.x += this.velocity.x;
        this.sprite.y += this.velocity.y;

        console.log(this.velocity.x);
    }
}
