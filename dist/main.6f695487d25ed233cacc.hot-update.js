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
    function Player() {
        this.sheet = PIXI.Loader.shared.resources['assets/img/textures.json'].spritesheet;
        this.textures = [
            this.sheet.textures['player/player_00.png'],
            this.sheet.textures['player/player_01.png'],
            this.sheet.textures['player/player_02.png']
        ];
        this.sprite = new PIXI.Sprite(this.textures[0]);
        this.velocity = 0.0;
        this.acceleration = 0.0;
        PIXI.Loader.shared.add('assets/img/textures.json').load(this.spritesLoaded);
        this.sprite.scale = new PIXI.Point(6, 6);
    }
    Player.prototype.update = function (delta) {
        console.log("Dou");
    };
    return Player;
}());
exports.default = Player;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL1BsYXllci5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1RkFBZ0M7QUFFaEM7SUFZSTtRQVhRLFVBQUssR0FBcUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLDBCQUEwQixDQUFDLENBQUMsV0FBVyxDQUFDO1FBQy9GLGFBQVEsR0FBbUI7WUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUM7U0FDOUMsQ0FBQztRQUNLLFdBQU0sR0FBZ0IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2RCxhQUFRLEdBQWUsR0FBRyxDQUFDO1FBQzNCLGlCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRy9CLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sdUJBQU0sR0FBYixVQUFjLEtBQWE7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUd2QixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMiLCJmaWxlIjoibWFpbi42ZjY5NTQ4N2QyNWVkMjMzY2FjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBwcml2YXRlIHNoZWV0OiBQSVhJLlNwcml0ZXNoZWV0ID0gUElYSS5Mb2FkZXIuc2hhcmVkLnJlc291cmNlc1snYXNzZXRzL2ltZy90ZXh0dXJlcy5qc29uJ10uc3ByaXRlc2hlZXQ7XG4gICAgcHJpdmF0ZSB0ZXh0dXJlczogUElYSS5UZXh0dXJlW10gPSBbXG4gICAgICAgIHRoaXMuc2hlZXQudGV4dHVyZXNbJ3BsYXllci9wbGF5ZXJfMDAucG5nJ10sXG4gICAgICAgIHRoaXMuc2hlZXQudGV4dHVyZXNbJ3BsYXllci9wbGF5ZXJfMDEucG5nJ10sXG4gICAgICAgIHRoaXMuc2hlZXQudGV4dHVyZXNbJ3BsYXllci9wbGF5ZXJfMDIucG5nJ11cbiAgICBdO1xuICAgIHB1YmxpYyBzcHJpdGU6IFBJWEkuU3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMudGV4dHVyZXNbMF0pO1xuXG4gICAgcHJpdmF0ZSB2ZWxvY2l0eTogbnVtYmVyICAgICA9IDAuMDtcbiAgICBwcml2YXRlIGFjY2VsZXJhdGlvbjogbnVtYmVyID0gMC4wO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFBJWEkuTG9hZGVyLnNoYXJlZC5hZGQoJ2Fzc2V0cy9pbWcvdGV4dHVyZXMuanNvbicpLmxvYWQodGhpcy5zcHJpdGVzTG9hZGVkKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCg2LCA2KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEb3VcIik7XG5cblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9