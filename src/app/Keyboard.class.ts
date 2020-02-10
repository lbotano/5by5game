export default class Keyboard {
    keys: { [id: string]: boolean} = {};

    constructor() {
        this.pressEventListener();

        window.addEventListener('keyup', (event: KeyboardEvent) => {
            event.preventDefault();
            this.keys[event.code] = false;
            this.pressEventListener();
        });

        window.addEventListener('touchend', (event: TouchEvent) => {
            event.preventDefault();
            this.keys['tap'] = false;
            this.pressEventListener();
        });
    }

    private pressEventListener(): void {
        // This is called once so you have to release the key before jumping again
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            event.preventDefault();
            this.keys[event.code] = true;
        }, {once: true});

        window.addEventListener('touchstart', (event: TouchEvent) => {
            event.preventDefault();
            this.keys['tap'] = true;
        });
    }

    public isPressed(eventCode: string): boolean {
        const isPressed: boolean = this.keys[eventCode];

        this.keys[eventCode] = false;
        
        return isPressed;
    }
}