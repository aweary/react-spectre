import React from 'react'

const GridItem = (props) => {

  return (
    <div
      style={{backgroundColor: '#EFEFEF', margin: '5px 1px'}}
      className={`column col-${props.width}`}>
      {props.children}
    </div>
  )
}

export default GridItem
