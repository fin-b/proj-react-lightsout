import './GameButton.css'

function GameButton (props) {
  return (
    <button
      className='gameButton'
      locked={props.locked}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

export { GameButton }
