export default class Keyboard {
    keys: { [id: string]: boolean} = {};

    constructor() {
        this.pressEventListener();

        window.addEventListener('keyup', (event: KeyboardEvent) => {
            this.keys[event.code] = false;
            this.pressEventListener();
        });
    }

    private pressEventListener(): void {
        // This is called once so you have to release the key before jumping again
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            this.keys[event.code] = true;
        }, {once: true});
    }

    public isPressed(eventCode: string): boolean {
        const isPressed: boolean = this.keys[eventCode];

        this.keys[eventCode] = false;

        console.log(isPressed, this.keys[eventCode]);
        
        return isPressed;
    }
}