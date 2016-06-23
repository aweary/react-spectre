import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import classNames from 'classnames'

const createSyle = props => {
  return StyleSheet.create({
    button: {
      color: props.labelColor,
      borderColor: props.color,
      backgroundColor: props.backgroundColor || props.color,
      ':hover': {
        backgroundColor: props.hoverBackgroundColor || props.hoverColor,
        color: props.hoverColor,
        border: props.hoverColor,
      },
    },
  });
}

const DefaultButton = (props) => {
  const stylesheet = createSyle(props);
  const className = classNames({
    'btn': true,
    'btn-block': props.block,
    'btn-lg': props.large,
    'btn-sm': props.small,
    'loading': props.loading,
    [css(stylesheet.button)]: true,
    [props.type]: props.type
  });
  return (
    <button
      {...props}
      className={className}>
        {props.label}
      </button>
  )
}

export default DefaultButton
