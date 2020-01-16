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
        this.sprite.scale = new PIXI.Point(6, 6);
    }
    Player.prototype.update = function (delta) {
        console.log("Dou");
    };
    return Player;
}());
exports.default = Player;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var Player_class_1 = __webpack_require__(/*! ./app/Player.class */ "./src/app/Player.class.ts");
var Keyboard = /** @class */ (function () {
    function Keyboard() {
        var _this = this;
        this.keys = {};
        window.addEventListener('keydown', function (event) {
            _this.keys[event.code] = true;
        });
        window.addEventListener('keyup', function (event) {
            _this.keys[event.code] = false;
        });
    }
    Keyboard.prototype.isPressed = function (eventCode) {
        return this.keys[eventCode];
    };
    return Keyboard;
}());
var Game = /** @class */ (function () {
    function Game() {
        this.app = new PIXI.Application({
            width: 1280,
            height: 720,
            backgroundColor: 0x42a7f5
        });
        this.player = new Player_class_1.default();
        /*app: PIXI.Application;
    
        const keyboard: Keyboard = new Keyboard();
    
        player: PIXI.Sprite;
        playerTextures: PIXI.Texture[];
    
        constructor() {
            this.app = new PIXI.Application({
                width: 1280,
                height: 720,
                backgroundColor: 0x42a7f5
            });
            PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
            PIXI.Loader.shared.add('assets/img/textures.json').load(this.setup);
        }
    
        setup(): void {
            document.body.appendChild(this.app.view);
    
            // Textures
            const sheet: PIXI.Spritesheet = PIXI.Loader.shared.resources['assets/img/textures.json'].spritesheet;
    
            playerTextures = [
                sheet.textures['player/player_00.png'],
                sheet.textures['player/player_01.png'],
                sheet.textures['player/player_02.png']
            ];
            
            player = new PIXI.Sprite(playerTextures[0]);
            app.stage.addChild(player);
            player.position.x = app.renderer.width / 2;
            player.position.y = app.renderer.height / 2;
            player.scale = new PIXI.Point(8, 8);
    
            console.log(app.renderer.width / 2);
            console.log(app.renderer.height / 2);
            
            // Assign update function
            app.ticker.add(update);
        }
    
        function update(delta: number): void {
            if (keyboard.isPressed('Space')) {
                player.texture = playerTextures[0];
            } else {
                player.texture = playerTextures[2];
            }
        }*/
    }
    return Game;
}());


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL1BsYXllci5jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQWdDO0FBRWhDO0lBWUk7UUFYUSxVQUFLLEdBQXFCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUMvRixhQUFRLEdBQW1CO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDO1NBQzlDLENBQUM7UUFDSyxXQUFNLEdBQWdCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdkQsYUFBUSxHQUFlLEdBQUcsQ0FBQztRQUMzQixpQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUcvQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSx1QkFBTSxHQUFiLFVBQWMsS0FBYTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBR3ZCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRCx1RkFBZ0M7QUFDaEMsZ0dBQXdDO0FBR3hDO0lBR0k7UUFBQSxpQkFRQztRQVZELFNBQUksR0FBNkIsRUFBRSxDQUFDO1FBR2hDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFvQjtZQUNwRCxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBb0I7WUFDbEQsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxTQUFpQjtRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDO0FBQ0Q7SUFBQTtRQUNVLFFBQUcsR0FBcUIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQy9DLEtBQUssRUFBRSxJQUFJO1lBQ1gsTUFBTSxFQUFFLEdBQUc7WUFDWCxlQUFlLEVBQUUsUUFBUTtTQUM1QixDQUFDLENBQUM7UUFFSCxXQUFNLEdBQVcsSUFBSSxzQkFBTSxFQUFFLENBQUM7UUFHOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQWdERztJQUNQLENBQUM7SUFBRCxXQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJtYWluLmU1NWZmZjMwNjBhMTlmMzJiN2MwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIHByaXZhdGUgc2hlZXQ6IFBJWEkuU3ByaXRlc2hlZXQgPSBQSVhJLkxvYWRlci5zaGFyZWQucmVzb3VyY2VzWydhc3NldHMvaW1nL3RleHR1cmVzLmpzb24nXS5zcHJpdGVzaGVldDtcbiAgICBwcml2YXRlIHRleHR1cmVzOiBQSVhJLlRleHR1cmVbXSA9IFtcbiAgICAgICAgdGhpcy5zaGVldC50ZXh0dXJlc1sncGxheWVyL3BsYXllcl8wMC5wbmcnXSxcbiAgICAgICAgdGhpcy5zaGVldC50ZXh0dXJlc1sncGxheWVyL3BsYXllcl8wMS5wbmcnXSxcbiAgICAgICAgdGhpcy5zaGVldC50ZXh0dXJlc1sncGxheWVyL3BsYXllcl8wMi5wbmcnXVxuICAgIF07XG4gICAgcHVibGljIHNwcml0ZTogUElYSS5TcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUodGhpcy50ZXh0dXJlc1swXSk7XG5cbiAgICBwcml2YXRlIHZlbG9jaXR5OiBudW1iZXIgICAgID0gMC4wO1xuICAgIHByaXZhdGUgYWNjZWxlcmF0aW9uOiBudW1iZXIgPSAwLjA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCg2LCA2KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEb3VcIik7XG5cbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vYXBwL1BsYXllci5jbGFzcyc7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJ3dlYnBhY2snO1xuXG5jbGFzcyBLZXlib2FyZCB7XG4gICAga2V5czogeyBbaWQ6IHN0cmluZ106IGJvb2xlYW59ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzUHJlc3NlZChldmVudENvZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5rZXlzW2V2ZW50Q29kZV07XG4gICAgfVxufVxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3QgYXBwOiBQSVhJLkFwcGxpY2F0aW9uID0gbmV3IFBJWEkuQXBwbGljYXRpb24oe1xuICAgICAgICB3aWR0aDogMTI4MCxcbiAgICAgICAgaGVpZ2h0OiA3MjAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogMHg0MmE3ZjVcbiAgICB9KTtcbiAgICBcbiAgICBwbGF5ZXI6IFBsYXllciA9IG5ldyBQbGF5ZXIoKTtcblxuXG4gICAgLyphcHA6IFBJWEkuQXBwbGljYXRpb247XG5cbiAgICBjb25zdCBrZXlib2FyZDogS2V5Ym9hcmQgPSBuZXcgS2V5Ym9hcmQoKTtcblxuICAgIHBsYXllcjogUElYSS5TcHJpdGU7XG4gICAgcGxheWVyVGV4dHVyZXM6IFBJWEkuVGV4dHVyZVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXBwID0gbmV3IFBJWEkuQXBwbGljYXRpb24oe1xuICAgICAgICAgICAgd2lkdGg6IDEyODAsXG4gICAgICAgICAgICBoZWlnaHQ6IDcyMCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogMHg0MmE3ZjVcbiAgICAgICAgfSk7XG4gICAgICAgIFBJWEkuc2V0dGluZ3MuU0NBTEVfTU9ERSA9IFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVDtcbiAgICAgICAgUElYSS5Mb2FkZXIuc2hhcmVkLmFkZCgnYXNzZXRzL2ltZy90ZXh0dXJlcy5qc29uJykubG9hZCh0aGlzLnNldHVwKTtcbiAgICB9XG5cbiAgICBzZXR1cCgpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmFwcC52aWV3KTtcblxuICAgICAgICAvLyBUZXh0dXJlc1xuICAgICAgICBjb25zdCBzaGVldDogUElYSS5TcHJpdGVzaGVldCA9IFBJWEkuTG9hZGVyLnNoYXJlZC5yZXNvdXJjZXNbJ2Fzc2V0cy9pbWcvdGV4dHVyZXMuanNvbiddLnNwcml0ZXNoZWV0O1xuXG4gICAgICAgIHBsYXllclRleHR1cmVzID0gW1xuICAgICAgICAgICAgc2hlZXQudGV4dHVyZXNbJ3BsYXllci9wbGF5ZXJfMDAucG5nJ10sXG4gICAgICAgICAgICBzaGVldC50ZXh0dXJlc1sncGxheWVyL3BsYXllcl8wMS5wbmcnXSxcbiAgICAgICAgICAgIHNoZWV0LnRleHR1cmVzWydwbGF5ZXIvcGxheWVyXzAyLnBuZyddXG4gICAgICAgIF07XG4gICAgICAgIFxuICAgICAgICBwbGF5ZXIgPSBuZXcgUElYSS5TcHJpdGUocGxheWVyVGV4dHVyZXNbMF0pO1xuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQocGxheWVyKTtcbiAgICAgICAgcGxheWVyLnBvc2l0aW9uLnggPSBhcHAucmVuZGVyZXIud2lkdGggLyAyO1xuICAgICAgICBwbGF5ZXIucG9zaXRpb24ueSA9IGFwcC5yZW5kZXJlci5oZWlnaHQgLyAyO1xuICAgICAgICBwbGF5ZXIuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCg4LCA4KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhhcHAucmVuZGVyZXIud2lkdGggLyAyKTtcbiAgICAgICAgY29uc29sZS5sb2coYXBwLnJlbmRlcmVyLmhlaWdodCAvIDIpO1xuICAgICAgICBcbiAgICAgICAgLy8gQXNzaWduIHVwZGF0ZSBmdW5jdGlvblxuICAgICAgICBhcHAudGlja2VyLmFkZCh1cGRhdGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChrZXlib2FyZC5pc1ByZXNzZWQoJ1NwYWNlJykpIHtcbiAgICAgICAgICAgIHBsYXllci50ZXh0dXJlID0gcGxheWVyVGV4dHVyZXNbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwbGF5ZXIudGV4dHVyZSA9IHBsYXllclRleHR1cmVzWzJdO1xuICAgICAgICB9XG4gICAgfSovXG59XG4iXSwic291cmNlUm9vdCI6IiJ9