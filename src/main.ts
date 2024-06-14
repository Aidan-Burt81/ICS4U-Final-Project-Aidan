import Phaser from 'phaser'
import PreloaderScene from './preloader'
import MainMenuScene from './mainmenu'
import AirHockeyGame from './game'
import GameOverScene from './gameover'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: [PreloaderScene, MainMenuScene, AirHockeyGame, GameOverScene]
}

new Phaser.Game(config)