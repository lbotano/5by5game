import * as PIXI from 'pixi.js';
import Game from './Game.class';

export default class Tooltip {
    private game: Game;

    private spritesheet: PIXI.Spritesheet;
    private textures: PIXI.Texture[];
    private sprite: PIXI.AnimatedSprite;

    constructor(game: Game) {
        this.game = game;

        const texturePrefix = this.game.mobileDetect.mobile() ? 'hand' : 'spacebar';

        this.spritesheet = PIXI.Loader.shared.resources['./assets/img/spritesheet.json'].spritesheet;
        this.textures = [
            this.spritesheet.textures[`${texturePrefix}_00.png`],
            this.spritesheet.textures[`${texturePrefix}_01.png`]
        ];
        this.sprite = new PIXI.AnimatedSprite(this.textures);

        this.sprite.scale.set(this.game.PIXEL_SCALE);
        this.resize();

        this.sprite.animationSpeed = 0.05;
        this.sprite.play();

        this.game.app.stage.addChild(this.sprite);
    }

    public setVisibility(makeVisible: boolean) {
        if (makeVisible)
            this.game.app.stage.addChild(this.sprite);
        else
            this.game.app.stage.removeChild(this.sprite);
    }

    public resize(): void {
        this.sprite.position.x = this.game.app.renderer.width / 2 - this.sprite.width / 2;
        this.sprite.position.y = this.game.app.renderer.height / 2 - this.sprite.height / 2;
    }
}