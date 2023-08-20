import './index.css'

const EmojiCard = props => {
  const {eachEmojis, getBtnIdList} = props

  const {id, emojiName, emojiUrl} = eachEmojis

  const emojiClicked = () => {
    getBtnIdList(id)
    console.log(id)
  }

  return (
    <li>
      <button type="button" className="emoji-button" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
