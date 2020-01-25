const WIDTH = 720;
const HEIGHT = 480;
const app = new PIXI.Application({
  width: WIDTH,
  height: HEIGHT
});
document.body.appendChild(app.view);

const stage = app.stage;

const barn = new PIXI.Sprite.from('assets/barn.jpeg');
barn.anchor.set(0.5, 0.5);
barn.position.set(WIDTH / 2, HEIGHT / 2);
barn.width = WIDTH;
barn.height = HEIGHT;

const cow = new PIXI.Sprite.from('assets/cow.png');

stage.addChild(barn);
stage.addChild(cow);