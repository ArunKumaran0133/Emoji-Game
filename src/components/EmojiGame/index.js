/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojiList: [], topScore: 0, isGameProgress: true}

  gameRestart = () => {
    this.setState({clickedEmojiList: [], isGameProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = emojisList.length === clickedEmojiList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojiList.length}
        gameRestart={this.gameRestart}
        totalScore={emojisList.length}
      />
    )
  }

  getShuffledEmojiList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const emojisList = this.getShuffledEmojiList()
    return (
      <ul className="list-container">
        {emojisList.map(eachEmojis => (
          <EmojiCard
            eachEmojis={eachEmojis}
            key={eachEmojis.id}
            getBtnIdList={this.getBtnIdList}
          />
        ))}
      </ul>
    )
  }

  finishGameAndTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameProgress: false})
  }

  getBtnIdList = id => {
    const {clickedEmojiList} = this.state
    const {emojisList} = this.props
    const isEmojiPresent = clickedEmojiList.includes(id)
    const clickedEmojiListLength = clickedEmojiList.length
    console.log(isEmojiPresent)

    if (isEmojiPresent) {
      this.finishGameAndTopScore(clickedEmojiListLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiListLength) {
        this.finishGameAndTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  render() {
    const {clickedEmojiList, topScore, isGameProgress} = this.state
    return (
      <div className="main-bg-container">
        <NavBar
          topScore={topScore}
          clickedEmojiList={clickedEmojiList}
          isGameProgress={isGameProgress}
        />
        <div className="emoji-container">
          {isGameProgress ? this.renderEmojiList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
