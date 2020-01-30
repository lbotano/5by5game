import * as PIXI from 'pixi.js';

import Pipe from '@app/Pipe.class';
import Game from './Game.class';

export default class Pipes {
    private game: Game;
    private sheet: PIXI.Spritesheet;
    private texture: PIXI.Texture;

    public sectionList: Array<Pipe> = new Array<Pipe>();
    private sectionWidth: number;
    private levelPosition: number = 0.0;

    private readonly SCALE_FACTOR = 6 * 5; // 5 = texture width; 6 = texture scale

    constructor(game: Game) {
        this.game = game;

        for (let i = 0; i < 3; i++) {
            this.sectionList.push(new Pipe(this.game));
        }
        console.log(this.sectionList);
        this.sectionWidth = this.game.app.renderer.width / (this.sectionList.length - 1);
    }

    private movePipes(): void {
        let section: number = 0;
        for (const s of this.sectionList) {
            s.posX = section * this.sectionWidth - this.levelPosition;
            section++;
        }
    }

    public update(delta: number): void {
        this.levelPosition += 7 * delta;

        if (this.levelPosition > this.sectionWidth) {
            this.levelPosition -= this.sectionWidth;
            this.sectionList.shift();
            const newPipe = new Pipe(this.game);
            newPipe.calculateObstacle();
            this.sectionList.push(newPipe);
        }

        this.movePipes();
        
        for (const p of this.sectionList) {
            p.update(delta);
        }
    }

    public destroy(): void {
        for (const p of this.sectionList) {
            p.destroy();
        }
    }
}