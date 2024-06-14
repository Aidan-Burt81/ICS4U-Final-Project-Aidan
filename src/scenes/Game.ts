import Phaser from 'phaser'

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
  scene: [AirHockeyGame]
}

class AirHockeyGame extends Phaser.Scene {
  private player: Phaser.Physics.Arcade.Sprite
  private opponent: Phaser.Physics.Arcade.Sprite
  private puck: Phaser.Physics.Arcade.Sprite
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys
  private playerScore: number = 0
  private opponentScore: number = 0
  private scoreText: Phaser.GameObjects.Text

  constructor() {
    super('AirHockeyGame')
  }

  preload() {
    this.load.image('player', 'assets/player.png')
    this.load.image('opponent', 'assets/opponent.png')
    this.load.image('puck', 'assets/puck.png')
    this.load.image('background', 'assets/background.png')
  }

  create() {
    this.add.image(400, 300, 'background')

    this.player = this.physics.add.sprite(400, 550, 'player')
    this.player.setCollideWorldBounds(true)
    this.player.setImmovable(true)

    this.opponent = this.physics.add.sprite(400, 50, 'opponent')
    this.opponent.setCollideWorldBounds(true)
    this.opponent.setImmovable(true)

    this.puck = this.physics.add.sprite(400, 300, 'puck')
    this.puck.setCollideWorldBounds(true)
    this.puck.setBounce(1, 1)
    this.puck.setDrag(0.98)
    this.puck.setMaxVelocity(600)

    this.physics.add.collider(this.puck, this.player)
    this.physics.add.collider(this.puck, this.opponent)
    this.physics.add.collider(this.player, this.opponent)

    this.cursors = this.input.keyboard.createCursorKeys()

    this.scoreText = this.add.text(16, 16, 'Player: 0  Opponent: 0', {
      fontSize: '32px',
      fill: '#fff'
    })
  }

  update() {
    this.handlePlayerInput()
    this.handleOpponentMovement()
    this.checkGoals()
  }

  private handlePlayerInput() {
    this.player.setVelocity(0)

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-300)
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(300)
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-300)
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(300)
    }
  }

  private handleOpponentMovement() {
    this.physics.moveToObject(this.opponent, this.puck, 200)
  }

  private checkGoals() {
    if (this.puck.y > this.game.config.height as number) {
      this.opponentScore++
      this.resetPuck()
    } else if (this.puck.y < 0) {
      this.playerScore++
      this.resetPuck()
    }
    this.scoreText.setText(`Player: ${this.playerScore}  Opponent: ${this.opponentScore}`)
  }

  private resetPuck() {
    this.puck.setPosition(400, 300)
    this.puck.setVelocity(0)
  }
}

new Phaser.Game(config)
