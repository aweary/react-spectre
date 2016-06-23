// @flow
import React, { Component } from 'react'
import classNames from 'classnames'

export type TableProps = {
  hover?: boolean,
  striped?: boolean,
}

export default class Table extends Component {

  constructor(props: TableProps) {
    super(props)
  }

  render() {
    const { hover, striped } = this.props

    const tableClassName = classNames({
      'table': true,
      'table-striped': striped,
      'table-hover': hover === false ? false : true
    })

    return (
      <table className={tableClassName}>
        {this.props.children}
      </table>
    )
  }
}
