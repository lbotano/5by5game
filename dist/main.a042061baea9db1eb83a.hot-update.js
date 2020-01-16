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
        var _this = this;
        this.ready = false;
        this.velocity = 0.0;
        this.acceleration = 0.0;
        this.app = app;
        PIXI.Loader.shared.add('./assets/img/textures.json').load(function () { _this.spritesLoaded(); });
    }
    Player.prototype.spritesLoaded = function () {
        // Initialize variables
        console.log("sprites loaded :)");
        this.sheet = PIXI.Loader.shared.resources['./assets/img/textures.json'].spritesheet;
        this.textures = [
            this.sheet.textures['player/player_00.png'],
            this.sheet.textures['player/player_01.png'],
            this.sheet.textures['player/player_02.png']
        ];
        this.sprite = new PIXI.Sprite(this.textures[0]);
        this.sprite.scale = new PIXI.Point(6, 6);
        this.app.stage.addChild(this.sprite);
        this.ready = true;
    };
    Player.prototype.update = function (delta) {
        if (!this.ready) {
            return;
        }
        this.sprite.texture = this.textures[0];
    };
    return Player;
}());
exports.default = Player;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL1BsYXllci5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1RkFBZ0M7QUFFaEM7SUFXSSxnQkFBWSxHQUFxQjtRQUFqQyxpQkFJQztRQVRPLFVBQUssR0FBWSxLQUFLLENBQUM7UUFFdkIsYUFBUSxHQUFlLEdBQUcsQ0FBQztRQUMzQixpQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUcvQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVmLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFPLEtBQUksQ0FBQyxhQUFhLEVBQUUsR0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVPLDhCQUFhLEdBQXJCO1FBQ0ksdUJBQXVCO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUM7U0FDOUMsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVNLHVCQUFNLEdBQWIsVUFBYyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsT0FBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMiLCJmaWxlIjoibWFpbi5hMDQyMDYxYmFlYTlkYjFlYjgzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBwcml2YXRlIGFwcDogUElYSS5BcHBsaWNhdGlvbjtcbiAgICBwcml2YXRlIHNoZWV0OiBQSVhJLlNwcml0ZXNoZWV0O1xuICAgIHByaXZhdGUgdGV4dHVyZXM6IFBJWEkuVGV4dHVyZVtdO1xuICAgIHB1YmxpYyBzcHJpdGU6IFBJWEkuU3ByaXRlO1xuXG4gICAgcHJpdmF0ZSByZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSB2ZWxvY2l0eTogbnVtYmVyICAgICA9IDAuMDtcbiAgICBwcml2YXRlIGFjY2VsZXJhdGlvbjogbnVtYmVyID0gMC4wO1xuXG4gICAgY29uc3RydWN0b3IoYXBwOiBQSVhJLkFwcGxpY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xuXG4gICAgICAgIFBJWEkuTG9hZGVyLnNoYXJlZC5hZGQoJy4vYXNzZXRzL2ltZy90ZXh0dXJlcy5qc29uJykubG9hZCgoKSA9PiB7dGhpcy5zcHJpdGVzTG9hZGVkKCl9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNwcml0ZXNMb2FkZWQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgdmFyaWFibGVzXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3ByaXRlcyBsb2FkZWQgOilcIik7XG4gICAgICAgIHRoaXMuc2hlZXQgPSBQSVhJLkxvYWRlci5zaGFyZWQucmVzb3VyY2VzWycuL2Fzc2V0cy9pbWcvdGV4dHVyZXMuanNvbiddLnNwcml0ZXNoZWV0O1xuICAgICAgICB0aGlzLnRleHR1cmVzID0gW1xuICAgICAgICAgICAgdGhpcy5zaGVldC50ZXh0dXJlc1sncGxheWVyL3BsYXllcl8wMC5wbmcnXSxcbiAgICAgICAgICAgIHRoaXMuc2hlZXQudGV4dHVyZXNbJ3BsYXllci9wbGF5ZXJfMDEucG5nJ10sXG4gICAgICAgICAgICB0aGlzLnNoZWV0LnRleHR1cmVzWydwbGF5ZXIvcGxheWVyXzAyLnBuZyddXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMudGV4dHVyZXNbMF0pO1xuXG4gICAgICAgIHRoaXMuc3ByaXRlLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoNiwgNik7XG5cbiAgICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5zcHJpdGUpO1xuXG4gICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMucmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3ByaXRlLnRleHR1cmUgPSB0aGlzLnRleHR1cmVzWzBdO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9