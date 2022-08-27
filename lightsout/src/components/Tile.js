import React from 'react'
import './Tile.css'

function Tile (props) {
  return (
    <button
      className='tile'
      status={props.status}
      onClick={() => props.onClick()}
    ></button>
  )
}

export { Tile }
