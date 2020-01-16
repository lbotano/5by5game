webpackHotUpdate("main",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQWdDO0FBSWhDO0lBR0k7UUFBQSxpQkFRQztRQVZELFNBQUksR0FBNkIsRUFBRSxDQUFDO1FBR2hDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFvQjtZQUNwRCxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBb0I7WUFDbEQsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxTQUFpQjtRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDO0FBQ0Q7SUFBQTtRQUNVLFFBQUcsR0FBcUIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQy9DLEtBQUssRUFBRSxJQUFJO1lBQ1gsTUFBTSxFQUFFLEdBQUc7WUFDWCxlQUFlLEVBQUUsUUFBUTtTQUM1QixDQUFDLENBQUM7UUFHSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBZ0RHO0lBQ1AsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDIiwiZmlsZSI6Im1haW4uYmZkZDk3NzYyZWE2N2VlZGVmZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XG5pbXBvcnQgKiBmcm9tICdhcHAvUGxheWVyLmNsYXNzJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnd2VicGFjayc7XG5cbmNsYXNzIEtleWJvYXJkIHtcbiAgICBrZXlzOiB7IFtpZDogc3RyaW5nXTogYm9vbGVhbn0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNQcmVzc2VkKGV2ZW50Q29kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmtleXNbZXZlbnRDb2RlXTtcbiAgICB9XG59XG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdCBhcHA6IFBJWEkuQXBwbGljYXRpb24gPSBuZXcgUElYSS5BcHBsaWNhdGlvbih7XG4gICAgICAgIHdpZHRoOiAxMjgwLFxuICAgICAgICBoZWlnaHQ6IDcyMCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAweDQyYTdmNVxuICAgIH0pO1xuICAgIFxuICAgIHBsYXllcjpcbiAgICAvKmFwcDogUElYSS5BcHBsaWNhdGlvbjtcblxuICAgIGNvbnN0IGtleWJvYXJkOiBLZXlib2FyZCA9IG5ldyBLZXlib2FyZCgpO1xuXG4gICAgcGxheWVyOiBQSVhJLlNwcml0ZTtcbiAgICBwbGF5ZXJUZXh0dXJlczogUElYSS5UZXh0dXJlW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hcHAgPSBuZXcgUElYSS5BcHBsaWNhdGlvbih7XG4gICAgICAgICAgICB3aWR0aDogMTI4MCxcbiAgICAgICAgICAgIGhlaWdodDogNzIwLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAweDQyYTdmNVxuICAgICAgICB9KTtcbiAgICAgICAgUElYSS5zZXR0aW5ncy5TQ0FMRV9NT0RFID0gUElYSS5TQ0FMRV9NT0RFUy5ORUFSRVNUO1xuICAgICAgICBQSVhJLkxvYWRlci5zaGFyZWQuYWRkKCdhc3NldHMvaW1nL3RleHR1cmVzLmpzb24nKS5sb2FkKHRoaXMuc2V0dXApO1xuICAgIH1cblxuICAgIHNldHVwKCk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYXBwLnZpZXcpO1xuXG4gICAgICAgIC8vIFRleHR1cmVzXG4gICAgICAgIGNvbnN0IHNoZWV0OiBQSVhJLlNwcml0ZXNoZWV0ID0gUElYSS5Mb2FkZXIuc2hhcmVkLnJlc291cmNlc1snYXNzZXRzL2ltZy90ZXh0dXJlcy5qc29uJ10uc3ByaXRlc2hlZXQ7XG5cbiAgICAgICAgcGxheWVyVGV4dHVyZXMgPSBbXG4gICAgICAgICAgICBzaGVldC50ZXh0dXJlc1sncGxheWVyL3BsYXllcl8wMC5wbmcnXSxcbiAgICAgICAgICAgIHNoZWV0LnRleHR1cmVzWydwbGF5ZXIvcGxheWVyXzAxLnBuZyddLFxuICAgICAgICAgICAgc2hlZXQudGV4dHVyZXNbJ3BsYXllci9wbGF5ZXJfMDIucG5nJ11cbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIHBsYXllciA9IG5ldyBQSVhJLlNwcml0ZShwbGF5ZXJUZXh0dXJlc1swXSk7XG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZChwbGF5ZXIpO1xuICAgICAgICBwbGF5ZXIucG9zaXRpb24ueCA9IGFwcC5yZW5kZXJlci53aWR0aCAvIDI7XG4gICAgICAgIHBsYXllci5wb3NpdGlvbi55ID0gYXBwLnJlbmRlcmVyLmhlaWdodCAvIDI7XG4gICAgICAgIHBsYXllci5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDgsIDgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGFwcC5yZW5kZXJlci53aWR0aCAvIDIpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcHAucmVuZGVyZXIuaGVpZ2h0IC8gMik7XG4gICAgICAgIFxuICAgICAgICAvLyBBc3NpZ24gdXBkYXRlIGZ1bmN0aW9uXG4gICAgICAgIGFwcC50aWNrZXIuYWRkKHVwZGF0ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGtleWJvYXJkLmlzUHJlc3NlZCgnU3BhY2UnKSkge1xuICAgICAgICAgICAgcGxheWVyLnRleHR1cmUgPSBwbGF5ZXJUZXh0dXJlc1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsYXllci50ZXh0dXJlID0gcGxheWVyVGV4dHVyZXNbMl07XG4gICAgICAgIH1cbiAgICB9Ki9cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=