import * as PIXI from 'pixi.js';
import { debug } from 'webpack';
1
class Keyboard {
    keys: { [id: string]: boolean} = {};

    constructor() {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            this.keys[event.code] = true;
        });

        window.addEventListener('keyup', (event: KeyboardEvent) => {
            this.keys[event.code] = false;
        });
    }

    isPressed(eventCode: string): boolean {
        return this.keys[eventCode];
    }
}

const app: PIXI.Application = new PIXI.Application({
    width: 1280,
    height: 720,
    backgroundColor: 0x42a7f5
});

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

PIXI.Loader.shared.add('assets/img/textures.json').load(setup);

const keyboard: Keyboard = new Keyboard();

let player: PIXI.Sprite;
let playerTextures: PIXI.Texture[];

function setup(): void {
    document.body.appendChild(app.view);

    // Textures
    const sheet: PIXI.Spritesheet = PIXI.Loader.shared.resources['assets/img/textures.json'].spritesheet;

    playerTextures = [
        sheet.textures['player/player_00.png'],
        sheet.textures['player/player_01.png'],
        sheet.textures['player/player_02.png']
    ];
    
    player = new PIXI.Sprite(playerTextures[0]);
    app.stage.addChild(player);
    player.position.x = app.renderer.width / 2;
    player.position.y = app.renderer.height / 2;
    player.scale = new PIXI.Point(8, 8);

    console.log(app.renderer.width / 2);
    console.log(app.renderer.height / 2);
    
    // Assign update function
    app.ticker.add(update);
}

function update(delta: number): void {
    if (keyboard.isPressed('Space')) {
        player.texture = playerTextures[0];
    } else {
        player.texture = playerTextures[2];
    }
}
