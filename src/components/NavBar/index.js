import './index.css'

const NavBar = props => {
  const {clickedEmojiList, topScore, isGameProgress} = props
  const logoUrl = 'https://assets.ccbp.in/frontend/react-js/game-logo-img.png'

  return (
    <div className="nav-container">
      <div className="img-text-container">
        <img src={logoUrl} alt="emoji logo" className="logo-emoji" />
        <p className="emoji-text">Emoji Game</p>
      </div>
      {isGameProgress ? (
        <div className="score-container">
          <p className="scores-text">Score: {clickedEmojiList.length}</p>
          <p className="scores-text">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default NavBar
