import Phaser from 'phaser'

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('PreloaderScene')
  }

  preload() {
    // Add a loading text
    const loadingText = this.add.text(400, 300, 'Loading...', {
      fontSize: '32px',
      fill: '#fff'
    })
    loadingText.setOrigin(0.5, 0.5)

    // Load assets
    this.load.image('player', 'assets/player.png')
    this.load.image('opponent', 'assets/opponent.png')
    this.load.image('puck', 'assets/puck.png')
    this.load.image('background', 'assets/background.png')

    // Load other assets (if any) such as sounds, additional images, etc.
    // this.load.audio('hitSound', 'assets/hit.mp3')
  }

  create() {
    this.scene.start('MainMenuScene')
  }
}
