import Game from '@app/Game.class';
import NumberSprite from './NumberSprite.class';

export default class NumberLabel {
    private game: Game;
    private numbers: NumberSprite[] = [];

    private value: number;

    private margin: number = 3;
    private numberWidth: number = 10;

    constructor(game: Game) {
        this.game = game;
        this.margin *= this.game.PIXEL_SCALE;
        this.numberWidth *= this.game.PIXEL_SCALE;

        this.setValue(0);
    }

    public setValue(value: number) {
        this.value = value;

        // Empty array of numbers
        for (const number of this.numbers) {
            number.destroy();
        }
        this.numbers = [];

        for (let i = 0; i < value.toString().length; i++) {
            this.numbers.push(
                new NumberSprite(
                    this.game,
                    parseInt(this.value.toString().charAt(i)),
                    i * (this.margin + this.numberWidth) + (this.game.app.renderer.width / 2) - (this.getWidth() / 2),
                    5
                )
            );
        }
    }

    public resize(): void {
        for (let i = 0; i < this.value.toString().length; i++) {
            this.numbers[i].sprite.position.x = i * (this.margin + this.numberWidth) + (this.game.app.renderer.width / 2) - (this.getWidth() / 2);
        }
    }

    private getWidth() {
        return this.numberWidth * this.value.toString().length + (this.value.toString().length - 1) * this.margin;
    }
}