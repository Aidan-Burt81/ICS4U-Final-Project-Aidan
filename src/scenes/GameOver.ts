import Phaser from 'phaser'

export default class GameOverScene extends Phaser.Scene {
  private winner: string
  private playerScore: number
  private opponentScore: number

  constructor() {
    super('GameOverScene')
  }

  init(data: { playerScore: number; opponentScore: number }) {
    this.playerScore = data.playerScore
    this.opponentScore = data.opponentScore
    this.winner = this.playerScore > this.opponentScore ? 'Player' : 'Opponent'
  }

  preload() {
    this.load.image('background', 'assets/background.png')
  }

  create() {
    this.add.image(400, 300, 'background')

    const titleText = this.add.text(400, 200, 'Game Over', {
      fontSize: '64px',
      fill: '#fff'
    })
    titleText.setOrigin(0.5, 0.5)

    const winnerText = this.add.text(400, 300, `${this.winner} Wins!`, {
      fontSize: '48px',
      fill: '#fff'
    })
    winnerText.setOrigin(0.5, 0.5)

    const scoreText = this.add.text(400, 400, `Player: ${this.playerScore}  Opponent: ${this.opponentScore}`, {
      fontSize: '32px',
      fill: '#fff'
    })
    scoreText.setOrigin(0.5, 0.5)

    const restartText = this.add.text(400, 500, 'Press R to Restart', {
      fontSize: '32px',
      fill: '#fff'
    })
    restartText.setOrigin(0.5, 0.5)

    this.input.keyboard.on('keydown-R', () => {
      this.scene.start('AirHockeyGame')
    })
  }
}
