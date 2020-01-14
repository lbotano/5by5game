type KeyFunc = () => any;

// TODO: Hacer public isPressed y crear otro constructor sin los handlers

export default class Keyboard {
    private keyCode: string;

    private keyDownDef  : KeyFunc;
    private keyUpDef    : KeyFunc;

    private isPressed: boolean = false;

    constructor(keyCode: string, keyDownDef: KeyFunc, keyUpDef: KeyFunc) {
        this.keyDownDef = keyDownDef;
        this.keyUpDef   = keyUpDef;

        this.keyCode = keyCode;

        window.addEventListener("keydown", (evt) => this.keyPressed(evt));
        window.addEventListener("keyup", (evt) => this.keyReleased(evt));
    }

    private keyPressed(event: KeyboardEvent): void {
        if (this.keyCode == event.code && !this.isPressed) {
            this.isPressed = true;
            this.keyDownDef();
        }
    }

    private keyReleased(event: KeyboardEvent): void {
        if (this.keyCode == event.code) {
            this.isPressed = false;
            this.keyUpDef();
        }
    }
}
