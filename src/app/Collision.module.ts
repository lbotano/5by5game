import {Sprite} from 'pixi.js';

export default function areColliding(a: PIXI.Rectangle, b: PIXI.Rectangle): boolean {
    return (a.x > b.x && a.x < b.x + b.width ||
            b.y > a.x && b.x < a.x + a.width) &&
           (a.y > b.y && a.y < b.y + b.height ||
            b.y > a.y && b.y < a.y + a.height);
}