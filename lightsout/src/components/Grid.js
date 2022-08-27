import React from 'react'
import { Tile } from './Tile'

class Grid extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tiles: Array(25).fill(0)
    }
  }

  handleClick(i) {
    const tiles = this.state.tiles.slice();
    tiles[i] = tiles[i] ? 0 : 1;
    this.setState({tiles: tiles});
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
      grid.push(<div key={r}>{row}</div>)
    }

    return <div>{grid}</div>
  }
}

export { Grid }
