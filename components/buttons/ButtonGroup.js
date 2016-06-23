import React, {Component} from 'react'

const ButtonGroup = (props) => {
  let className = 'btn-group'
  if (props.block) {
    className += ' btn-group-block'
  }
  return (
    <div className={className}>
      {props.children}
    </div>
  );
}

export default ButtonGroup
