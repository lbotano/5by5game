const app = new PIXI.Application();

document.body.appendChild(app.view);

resizeWindow();
window.addEventListener('resize', () => {
    resizeWindow();
});

app.renderer.backgroundColor = 0x5fa0dd;

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

PIXI.Loader.shared.add('textures/textures.json').load(() => {
    const sheet = PIXI.Loader.shared.resources['textures/textures.json'];
    const playerSheet = new PIXI.Sprite(sheet.textures['player/player_00.png']);

    app.stage.addChild(playerSheet);

    playerSheet.width *= 10;
    playerSheet.height *= 10;
    playerSheet.x = app.screen.width / 2;
    playerSheet.y = app.screen.height / 2;
});

function resizeWindow(): void {
    app.renderer.resize(window.innerWidth, window.innerHeight);
}