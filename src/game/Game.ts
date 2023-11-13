import { Game as PhaserGame } from 'phaser';
import config from 'game/config/gameConfig';

import GameScene from 'game/scenes/GameScene';

export default class Game extends PhaserGame {
	constructor() {
		super(config);
		this.scene.add(GameScene.sceneName, GameScene, true);
	}
}

