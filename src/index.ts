import * as PIXI from 'pixi.js';
import Player from './Player';

const app = new PIXI.Application();

document.body.appendChild(app.view);


class Game {
    public player: Player;
    constructor() {
        app.renderer.backgroundColor = 0x5fa0dd;

        // Prevent the pixelart from being blurry
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        // Makes the canvas the same size as the viewport
        this.windowResized();

        this.player = new Player(app);
        PIXI.Loader.shared.add('assets/img/textures.json').load(() => {
            this.player.setSheet(PIXI.Loader.shared.resources['assets/img/textures.json']);
            app.ticker.add((delta) => {
                this.player.update();
            });
        });

        window.addEventListener('resize', this.windowResized);
    }

    private windowResized(): void {
        app.renderer.resize(window.innerWidth, window.innerHeight);
    }

    private update(delta: number): void {
        this.player.update();
    }
}

let game = new Game();
