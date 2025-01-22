const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./fire_circles_100x100_61f.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

gameEngine.addEntity(new FireCircle)

	gameEngine.init(ctx);

	gameEngine.start();
});
