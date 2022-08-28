import React from 'react'
import './Light.css'

function Light (props) {
  return (
    <button
      className='light'
      status={props.status}
      onClick={() => props.onClick()}
    ></button>
  )
}

export { Light }
