import React from 'react'
import { Light } from './Light'
import { GameButton } from './GameButton'
import './Grid.css'
import puzzleSet from '../puzzles/puzzles.json'

class Grid extends React.Component {
  constructor (props) {
    super(props)

    const puzzles = puzzleSet.initial_states

    this.state = {
      lights: puzzles[Math.floor(Math.random() * puzzles.length)],
      puzzles: puzzles,
      solved: false,
      clicks: 0
    }
  }

  handleClick (i) {
    if (this.state.solved) return

    const NONE = -1 // Out-of-bound index
    const lights = this.state.lights.slice()

    // Get indexes of neighbouring lights
    const targets = [
      i - 5, // Light above
      i % 5 ? i - 1 : NONE, // Light on left, account for left edge of grid
      i, // Selected light
      (i + 1) % 5 ? i + 1 : NONE, // Light on right, account for right edge of grid
      i + 5 // Light below
    ].filter(i => 0 <= i <= lights.length) // Remove out-of-bound indexes

    // Toggle each selected light's status
    targets.forEach(light => (lights[light] = lights[light] ? 0 : 1))

    this.setState({ lights: lights, solved: isSolved(lights), clicks: this.state.clicks + 1 })
  }

  nextPuzzle () {
    // Do nothing if current puzzle unsolved
    if (!this.state.solved) return

    this.setState({
      // Select random puzzle
      lights: this.state.puzzles[
        Math.floor(Math.random() * this.state.puzzles.length)
      ],
      // New puzzle is unsolved
      solved: false,
      clicks: 0
    })
  }

  /**
   *
   * @param {number} k key
   * @param {number} s status
   * @returns {JSX.Element}
   */
  renderLight (k, s) {
    return <Light key={k} status={s} onClick={() => this.handleClick(k)} />
  }

  /**
   *
   * @param {boolean} locked
   * @param {function} action
   * @param {string} content
   * @returns {JSX.Element}
   */
  renderGameButton (locked, action, content) {
    return <GameButton locked={locked} onClick={action} text={content} />
  }

  render () {
    const SIZE = 5
    let grid = []

    const status = this.state.solved ? 'Solved' : 'Unsolved'
    const clickBubble = this.state.clicks ? <div className='statBubble'>{this.state.clicks}</div> : <></>

    // Generate row
    for (let r = 0; r < SIZE; r++) {
      let row = []
      // Generate grid of lights
      for (let c = 0; c < SIZE; c++) {
        let i = r * SIZE + c
        row.push(this.renderLight(i, this.state.lights[i]))
      }
      grid.push(
        <div key={r} className='gridRow'>
          {row}
        </div>
      )
    }

    let nextPuzzleButton = this.renderGameButton(
      (!this.state.solved).toString(),
      () => this.nextPuzzle(),
      'Next Puzzle'
    )

    let copyStateToClipboardButton = this.renderGameButton(
      false.toString(),
      () => navigator.clipboard.writeText(this.state.lights.slice(0, 24)),
      'Copy Grid'
    )

    return (
      <div className='gridContainer'>
        <div className='grid'>{grid}</div>
        <div className='statusMessage'>{status}</div>
        <div className='gameButtons'>
          {copyStateToClipboardButton}
          {nextPuzzleButton}
        </div>
        {clickBubble}
      </div>
    )
  }
}

/**
 * Determines whether the given puzzle has been solved.
 *
 * @param {Array<number>} lights The status of the lights in the puzzle.
 * @returns {boolean} `true` if solved, `false` otherwise.
 */
function isSolved (lights) {
  // Is every light off?
  return lights.every(t => !t)
}

export { Grid }
