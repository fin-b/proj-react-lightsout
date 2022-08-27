import React from 'react'
import { Tile } from './Tile'
import './Grid.css'
import puzzleSet from '../puzzles/puzzles.json'

class Grid extends React.Component {
  constructor (props) {
    super(props)

    const puzzles = puzzleSet.initial_states

    this.state = {
      tiles: puzzles[Math.floor(Math.random() * puzzles.length)],
      puzzles: puzzles
    }
  }

  handleClick (i) {
    const NONE = -1 // Out-of-bound index
    const tiles = this.state.tiles.slice()

    // Generate cross pattern about selected tile
    const targets = [
      i - 5, // Tile above
      i % 5 ? i - 1 : NONE, // Tile on left, account for left edge of grid
      i, // Selected tile
      (i + 1) % 5 ? i + 1 : NONE, // Tile on right, account for right edge of grid
      i + 5 // Tile above
    ].filter(i => 0 <= i <= this.state.tiles.length) // Remove out-of-bound indexes

    // Toggle each selected tile's status
    targets.forEach(t => (tiles[t] = tiles[t] ? 0 : 1))

    this.setState({ tiles: tiles })
  }

  /**
   *
   * @param {number} k key
   * @param {number} s status
   * @returns {JSX.Element}
   */
  renderTile (k, s) {
    return <Tile key={k} status={s} onClick={() => this.handleClick(k)} />
  }

  render () {
    const SIZE = 5
    let grid = []
    const status = isSolved(this.state.tiles) ? 'Solved' : 'Unsolved'

    // Generate row
    for (let r = 0; r < SIZE; r++) {
      let row = []
      // Generate tiles
      for (let c = 0; c < SIZE; c++) {
        let i = r * SIZE + c
        row.push(this.renderTile(i, this.state.tiles[i]))
      }
      grid.push(
        <div key={r} className='gridRow'>
          {row}
        </div>
      )
    }

    let nextPuzzleButton = (
      <button
        className='gameButton'
        onClick={() =>
          this.setState({
            tiles: this.state.puzzles[
              Math.floor(Math.random() * this.state.puzzles.length)
            ]
          })
        }
      >
        Next Puzzle
      </button>
    )

    let copyStateToClipboardButton = (
      <button
        className='gameButton'
        onClick={() => navigator.clipboard.writeText(this.state.tiles)}
      >
        Copy Grid
      </button>
    )

    return (
      <div className='gridContainer'>
        <div className='grid'>{grid}</div>
        <div className='statusMessage'>{status}</div>
        <div className='gameButtons'>
          {copyStateToClipboardButton}
          {nextPuzzleButton}
        </div>
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
