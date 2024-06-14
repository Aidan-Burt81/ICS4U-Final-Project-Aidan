import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene')
  }

  preload() {
    // Here you can load any assets that are necessary for the preloader
    this.load.image('logo', 'assets/logo.png')
  }

  create() {
    // Add the logo to the center of the screen
    this.add.image(400, 300, 'logo')

    // Set a timeout to transition to the PreloaderScene after a short delay
    this.time.delayedCall(1000, () => {
      this.scene.start('PreloaderScene')
    })
  }
}
