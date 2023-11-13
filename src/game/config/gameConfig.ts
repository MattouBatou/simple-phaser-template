import { AUTO, Types } from 'phaser';

const config: Types.Core.GameConfig = {
	type: AUTO,
	backgroundColor: 'blue',
	scale: {
		mode: Phaser.Scale.RESIZE,
		parent: 'phaserGameContainer',
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
};

export default config;

