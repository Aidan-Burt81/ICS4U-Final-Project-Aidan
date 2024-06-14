import Phaser from 'phaser'

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenuScene')
  }

  preload() {
    this.load.image('background', 'assets/background.png')
  }

  create() {
    this.add.image(400, 300, 'background')

    const titleText = this.add.text(400, 200, 'Air Hockey Game', {
      fontSize: '64px',
      fill: '#fff'
    })
    titleText.setOrigin(0.5, 0.5)

    const startText = this.add.text(400, 300, 'Press S to Start', {
      fontSize: '32px',
      fill: '#fff'
    })
    startText.setOrigin(0.5, 0.5)

    this.input.keyboard.on('keydown-S', () => {
      this.scene.start('AirHockeyGame')
    })
  }
}