import React, {Component} from 'react'

const Blockquote = (props) => (
  <blockquote>
    <p>{props.children}</p>
    <cite>{props.source}</cite>
  </blockquote>
)

export default Blockquote
