import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, gameRestart, totalScore} = props
  const wonOrLossText = isWon ? 'You Won' : 'You Lose'
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const restartGame = () => {
    gameRestart()
  }

  return (
    <div className="a">
      <div className="won-or-loose-container">
        <img src={imgUrl} alt="win or lose" className="image" />
        <div>
          <h1 className="text">{wonOrLossText}</h1>
          <p className="score-text">Best Score</p>
          <p className="score">
            {score}/{totalScore}
          </p>
          <button
            type="button"
            className="play-again-button"
            onClick={restartGame}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
