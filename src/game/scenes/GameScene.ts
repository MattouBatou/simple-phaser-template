import { GameObjects, Physics, Scene, Structs, Geom } from 'phaser';

export default class GameScene extends Scene {
	static sceneName: string = 'Game';
	private background: GameObjects.Image;
	private emitter: GameObjects.Particles.ParticleEmitter;
	private logo: Physics.Arcade.Image;

	preload() {
		this.load.image('sky', 'assets/images/space3.png');
		this.load.image('logo', 'assets/images/phaser3-logo.png');
		this.load.image('red', 'assets/images/red.png');
	}

	create() {
		this.background = this.add.image(0, 0, 'sky');

		this.emitter = this.add.particles(0, 0, 'red', {
			speed: 100,
			scale: { start: 1, end: 0 },
			blendMode: 'ADD',
		});

		this.logo = this.physics.add.image(400, 100, 'logo');
		this.logo.setVelocity(100, 200);
		this.logo.setBounce(1, 1);
		this.logo.setCollideWorldBounds(true);

		this.emitter.startFollow(this.logo);

		this.scale.on(
			'resize',
			(gameSize: Structs.Size) => {
				this.resize(gameSize);
			},
			this
		);

		this.resize(this.scale.gameSize);
	}

	resize(gameSize: Structs.Size) {
		const width = gameSize.width;
		const height = gameSize.height;

		this.physics.world.setBounds(0, 0, width, height);

		if (width > height) {
			// scale to fill height
			this.background.setScale(height / this.background.height);
		} else {
			// scale to fill width
			this.background.setScale(width / this.background.width);
		}

		this.background.setPosition(width / 2, height / 2);
		this.logo.setScale(this.background.scaleX);
	}
}
