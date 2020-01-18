import * as PIXI from 'pixi.js';
import Player from './app/Player.class';
import { debug } from 'webpack';

const app = new PIXI.Application({
    width: 1280,
    height: 720,
    backgroundColor: 0x42a7f5
});

class Game {
    /*readonly app: PIXI.Application = new PIXI.Application({
        width: 1280,
        height: 720,
        backgroundColor: 0x42a7f5
    });*/
    
    private player: Player;
    
    constructor() {
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        document.body.appendChild(app.view);

        this.player = new Player(app);

        app.ticker.add((delta) => {this.update(delta)});
    }

    update(delta: number): void {
        this.player.update(delta);
    }
}

new Game();