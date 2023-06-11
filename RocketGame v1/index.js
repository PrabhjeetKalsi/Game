import { gameHeight, gameWidth, modAbs, MOVE_DIST } from "./constants.js";
import { galaxy, reverseGalaxy } from "./galaxy.js";
import { rocket } from "./rocket.js";

//Initiated pixi app with full window dimensions and a background colour
const app = new PIXI.Application({
  background: "black",
  width: gameWidth,
  height: gameHeight,
});
document.body.appendChild(app.view);

//Set background as galaxy
app.stage.addChild(galaxy);
app.stage.addChild(reverseGalaxy);

//Make it infinitly moving background
let y = 0;

app.ticker.add((delta) => {
  y += delta * 2;
  if (y > gameHeight + galaxy.height / 2) {
    y = -galaxy.height / 2;
  }
  y = modAbs(y, gameHeight);
  reverseGalaxy.visible = false;
  if (y + galaxy.height > gameHeight) {
    reverseGalaxy.visible = true;
    reverseGalaxy.position.y = y - gameHeight;
  }
  galaxy.position.y = y;
});

//Adding rocket image and positioning
rocket.x = app.screen.width / 2;
rocket.y = app.screen.height / 1.5;
app.stage.addChild(rocket);

//Setting Limits for rocket
const RIGHT_LIMIT = gameWidth - rocket.width - MOVE_DIST;
const LEFT_LIMIT = MOVE_DIST;
const TOP_LIMIT = MOVE_DIST;
const BOTTOM_LIMIT = gameHeight - rocket.height - MOVE_DIST;

//Moving rocket by using arrow keys
window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowDown":
      if (rocket.y <= BOTTOM_LIMIT) {
        rocket.y += MOVE_DIST;
      }
      break;
    case "ArrowUp":
      if (rocket.y >= TOP_LIMIT) {
        rocket.y -= MOVE_DIST;
      }
      break;
    case "ArrowRight":
      if (rocket.x <= RIGHT_LIMIT) {
        rocket.x += MOVE_DIST;
      }
      break;
    case "ArrowLeft":
      if (rocket.x >= LEFT_LIMIT) {
        rocket.x -= MOVE_DIST;
      }
      break;
  }
});
