import * as PIXI from 'pixi.js';
import Player from './app/Player.class';
import Pipes from './app/Pipes.class';
import areColliding from '@app/Collision.module';
import Pipe from '@app/Pipe.class';
import { debug } from 'webpack';

const app = new PIXI.Application({
    width: 1280,
    height: 720,
    backgroundColor: 0x42a7f5
});

class Game {
    private player: Player;
    private pipes: Pipes;

    private isGameStarted: boolean = true;
    
    constructor() {

        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        document.body.appendChild(app.view);

        PIXI.Loader.shared.add('./assets/img/textures.json').load(() => {
            this.player = new Player(app);
            this.pipes = new Pipes(app);

            console.log(areColliding(new PIXI.Rectangle(0, 0, 3, 3), new PIXI.Rectangle(2, 2, 1 ,1)));

            app.ticker.add((delta) => {this.update(delta)});
        });
    }

    update(delta: number): void {
        if (this.isGameStarted) {
            this.player.update(delta);
            this.pipes.update(delta);

            for (const pipe of this.pipes.sectionList) {
                const playerBounds = this.player.getBounds();

                if (areColliding(playerBounds, pipe.getBottomBounds()) || areColliding(playerBounds, pipe.getTopBounds())) {
                    console.log(this.player.sprite.x)

                    this.isGameStarted = false;
                    app.renderer.backgroundColor = 0xff0000;
                }
            }
        }
    }
}

new Game();