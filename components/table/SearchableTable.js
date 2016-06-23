// @flow
import React, { Component } from 'react'
import classNames from 'classnames'

import FormInput from '../form/FormInput'
import PrimaryButton from '../buttons/PrimaryButton'
import Table from './Table'


export default class SearchableTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filtered: props.data
    }
    this.onSearchInput = this.onSearchInput.bind(this)
  }

  onSearchInput(event) {
    const {filter, data} = this.props
    const {value} = event.target

    const filtered = data.filter(data => {
      for (let i = 0; i < filter.length; i++) {
        const key = filter[i]
        const item = data[key] + ''
        if (item.includes(value)) return true
      }
      return false
    })

    this.setState({ filtered })
  }

  render() {
    const {filtered} = this.state;
    const {hover, striped, filter, renderRows} = this.props
    const rows = filtered.map(renderRows)
    const tableClassName = classNames({
      'table': true,
      'table-striped': striped,
      'table-hover': hover === false ? false : true
    })
    console.log(filtered)

    return (
      <div>
        <div>
          <FormInput
            placeholder='Search the table'
            onChange={this.onSearchInput} />
        </div>
        <Table>
          {this.props.children}
          {rows}
        </Table>
      </div>
    )
  }
}
