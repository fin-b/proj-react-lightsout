import React from 'react'
import { Tile } from './Tile'
import './Grid.css'

class Grid extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tiles: Array(25).fill(0)
    }
  }

  handleClick (i) {
    const NONE = -1
    const tiles = this.state.tiles.slice()
    const targets = [
      i - 5,
      i % 5 ? i - 1 : NONE,
      i,
      (i + 1) % 5 ? i + 1 : NONE,
      i + 5
    ].filter(i => 0 <= i <= this.state.tiles.length)

    targets.forEach(t => (tiles[t] = tiles[t] ? 0 : 1))

    // tiles[i] = tiles[i] ? 0 : 1
    this.setState({ tiles: tiles })
  }

  /**
   *
   * @param {number} k key
   * @param {number} s status
   * @returns
   */
  renderTile (k, s) {
    return <Tile key={k} status={s} onClick={() => this.handleClick(k)} />
  }

  render () {
    const SIZE = 5
    let grid = []

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

    return <div>{grid}</div>
  }
}

export { Grid }
