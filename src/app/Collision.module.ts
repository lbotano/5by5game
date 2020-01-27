import {Sprite} from 'pixi.js';

export default function areColliding(a: PIXI.Rectangle, b: PIXI.Rectangle): boolean {
    // max1 >= min2 and min1 <= max2
    return  a.x + a.width   >= b.x && a.x <= b.x + b.width &&
            a.y + a.height  >= b.y && a.y <= b.y + b.height;
}