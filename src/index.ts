import * as PIXI from 'pixi.js';
import Player from './app/Player.class';
import Pipes from './app/Pipes.class';
import { debug } from 'webpack';

const app = new PIXI.Application({
    width: 1280,
    height: 720,
    backgroundColor: 0x42a7f5
});

class Game {
    private player: Player;
    private pipes: Pipes;
    
    constructor() {
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        document.body.appendChild(app.view);

        PIXI.Loader.shared.add('./assets/img/textures.json').load(() => {
            this.player = new Player(app);
            this.pipes = new Pipes(app);

            app.ticker.add((delta) => {this.update(delta)});
        });
    }

    update(delta: number): void {
        this.player.update(delta);
        this.pipes.update(delta);
    }
}

new Game();