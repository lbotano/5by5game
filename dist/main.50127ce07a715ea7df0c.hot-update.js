webpackHotUpdate("main",{

/***/ "./src/app/Player.class.ts":
/*!*********************************!*\
  !*** ./src/app/Player.class.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var Player = /** @class */ (function () {
    function Player(app) {
        this.velocity = 0.0;
        this.acceleration = 0.0;
        this.app = app;
        PIXI.Loader.shared.add('assets/img/textures.json').load(this.spritesLoaded);
    }
    Player.prototype.spritesLoaded = function () {
        // Initialize variables
        this.sheet = PIXI.Loader.shared.resources['assets/img/textures.json'].spritesheet;
        this.textures = [
            this.sheet.textures['player/player_00.png'],
            this.sheet.textures['player/player_01.png'],
            this.sheet.textures['player/player_02.png']
        ];
        this.sprite = new PIXI.Sprite(this.textures[0]);
        this.sprite.scale = new PIXI.Point(6, 6);
    };
    Player.prototype.update = function (delta) {
        console.log("Dou");
    };
    return Player;
}());
exports.default = Player;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL1BsYXllci5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1RkFBZ0M7QUFFaEM7SUFTSSxnQkFBWSxHQUFxQjtRQUh6QixhQUFRLEdBQWUsR0FBRyxDQUFDO1FBQzNCLGlCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRU8sOEJBQWEsR0FBckI7UUFDSSx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDbEYsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDO1NBQzlDLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sdUJBQU0sR0FBYixVQUFjLEtBQWE7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMiLCJmaWxlIjoibWFpbi41MDEyN2NlMDdhNzE1ZWE3ZGYwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBwcml2YXRlIGFwcDogUElYSS5BcHBsaWNhdGlvbjtcbiAgICBwcml2YXRlIHNoZWV0OiBQSVhJLlNwcml0ZXNoZWV0O1xuICAgIHByaXZhdGUgdGV4dHVyZXM6IFBJWEkuVGV4dHVyZVtdO1xuICAgIHB1YmxpYyBzcHJpdGU6IFBJWEkuU3ByaXRlO1xuXG4gICAgcHJpdmF0ZSB2ZWxvY2l0eTogbnVtYmVyICAgICA9IDAuMDtcbiAgICBwcml2YXRlIGFjY2VsZXJhdGlvbjogbnVtYmVyID0gMC4wO1xuXG4gICAgY29uc3RydWN0b3IoYXBwOiBQSVhJLkFwcGxpY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xuXG4gICAgICAgIFBJWEkuTG9hZGVyLnNoYXJlZC5hZGQoJ2Fzc2V0cy9pbWcvdGV4dHVyZXMuanNvbicpLmxvYWQodGhpcy5zcHJpdGVzTG9hZGVkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNwcml0ZXNMb2FkZWQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgdmFyaWFibGVzXG4gICAgICAgIHRoaXMuc2hlZXQgPSBQSVhJLkxvYWRlci5zaGFyZWQucmVzb3VyY2VzWydhc3NldHMvaW1nL3RleHR1cmVzLmpzb24nXS5zcHJpdGVzaGVldDtcbiAgICAgICAgdGhpcy50ZXh0dXJlcyA9IFtcbiAgICAgICAgICAgIHRoaXMuc2hlZXQudGV4dHVyZXNbJ3BsYXllci9wbGF5ZXJfMDAucG5nJ10sXG4gICAgICAgICAgICB0aGlzLnNoZWV0LnRleHR1cmVzWydwbGF5ZXIvcGxheWVyXzAxLnBuZyddLFxuICAgICAgICAgICAgdGhpcy5zaGVldC50ZXh0dXJlc1sncGxheWVyL3BsYXllcl8wMi5wbmcnXVxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLnRleHR1cmVzWzBdKTtcblxuICAgICAgICB0aGlzLnNwcml0ZS5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDYsIDYpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRvdVwiKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==