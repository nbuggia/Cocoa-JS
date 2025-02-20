"use strict";

import { CocoGame } from "../dist/CocoGame.js";
import { Scene } from "../dist/Scene.js";
import { Sprite } from "../dist/Sprite.js";

const game = new CocoGame("canvas");
const scene = new Scene();
const sprite = new Sprite(50, 50, 100, 100, "red");

scene.addSprite(sprite);

game.sceneManager.setScene(scene);
game.start();
