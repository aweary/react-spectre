import React from 'react'

const GridRow = (props) => {
  return (
    <div className='columns'>
      {props.children}
    </div>
  )
}

export default GridRow
