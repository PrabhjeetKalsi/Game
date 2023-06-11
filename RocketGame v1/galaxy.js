import { gameHeight, gameWidth } from "./constants.js";

export const galaxy = PIXI.Sprite.from("assets/galaxy.jpeg");
export const reverseGalaxy = PIXI.Sprite.from("assets/galaxy.jpeg");
galaxy.width = gameWidth;
galaxy.height = gameHeight;
reverseGalaxy.width = gameWidth;
reverseGalaxy.height = gameHeight;
