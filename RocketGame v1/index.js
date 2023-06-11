//Initiated pixi app with full window dimensions and a background colour
const gameWidth = window.innerWidth * 0.75;
const gameHeight = window.innerHeight * 0.6;
const app = new PIXI.Application({
  background: "black",
  width: gameWidth,
  height: gameHeight,
});
document.body.appendChild(app.view);

//Set background as galaxy
const galaxy = PIXI.Sprite.from("assets/galaxy.jpg");
galaxy.width = gameWidth;
galaxy.height = gameHeight;
app.stage.addChild(galaxy);

//Adding rocket image
const rocket = PIXI.Sprite.from("assets/rocket.png");
rocket.x = app.screen.width / 2;
rocket.y = app.screen.height / 1.5;
rocket.width = 50;
rocket.height = 50;
app.stage.addChild(rocket);

//Setting Limits for rocket
const RIGHT_LIMIT = gameWidth - rocket.width - 10;
const LEFT_LIMIT = 10;
const TOP_LIMIT = 10;
const BOTTOM_LIMIT = gameHeight - rocket.height - 10;

//Moving rocket by using arrow keys
window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowDown":
      if (rocket.y <= BOTTOM_LIMIT) {
        rocket.y += 10;
      }
      break;
    case "ArrowUp":
      if (rocket.y >= TOP_LIMIT) {
        rocket.y -= 10;
      }
      break;
    case "ArrowRight":
      if (rocket.x <= RIGHT_LIMIT) {
        rocket.x += 10;
      }
      break;
    case "ArrowLeft":
      if (rocket.x >= LEFT_LIMIT) {
        rocket.x -= 10;
      }
      break;
  }
});
