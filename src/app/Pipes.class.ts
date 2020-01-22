import * as PIXI from 'pixi.js';

import Pipe from '@app/Pipe.class';

export default class Pipes {
    private app: PIXI.Application;
    private sheet: PIXI.Spritesheet;
    private texture: PIXI.Texture;

    private sectionWidth: number;
    private sectionList: Array<Pipe> = new Array<Pipe>();
    private levelPosition: number = 0.0;

    private readonly SCALE_FACTOR = 6 * 5; // 5 = texture width; 6 = texture scale

    constructor(app: PIXI.Application) {
        this.app = app;

        for (let i = 0; i < 3; i++) {
            this.sectionList.push(new Pipe(this.app));
        }
        console.log(this.sectionList);
        this.sectionWidth = this.app.renderer.width / (this.sectionList.length - 1);
    }

    private movePipes(): void {
        let section: number = 0;
        for (const s of this.sectionList) {
            s.posX = section * this.sectionWidth - this.levelPosition;
            section++;
        }
    }

    public update(delta: number): void {
        this.levelPosition += 5 * delta;

        if (this.levelPosition > this.sectionWidth) {
            this.levelPosition -= this.sectionWidth;
            this.sectionList.shift()//.destroy();
            const newPipe = new Pipe(this.app);
            newPipe.calculateObstacle();
            this.sectionList.push(newPipe);
        }

        this.movePipes();
        
        for (const p of this.sectionList) {
            p.update(delta);
        }
    }
}