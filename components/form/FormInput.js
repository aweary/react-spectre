import React, { Component } from 'react'
import classNames from 'classnames'

import FormGroup from './FormGroup'


export class FormInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      success: null,
      value: '',
    }
    this.onChange = this.onChange.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  onBlur(event) {
    const {validate} = this.props
    const {value} = this.state
    if (validate) {
      const error = validate(value)
      this.setState({
        success: !error,
        errorMessage: error
      })
    }
  }

  onChange(event) {
    const {onChange} = this.props
    this.setState({
      value: event.target.value
    })
    if (onChange) {
      onChange(event)
    }
  }

  render() {
    const {success, value, errorMessage} = this.state;
    let {label, placeholder, id, type, validate} = this.props;
    const inputClassName = classNames({
      'form-input': true,
      'is-success': validate && success,
      'is-danger': validate && success === false
    })
    return (
      <FormGroup {...this.props}>
        <label
          htmlFor={id || label || type}
          className='form-label'>
          {errorMessage || label}
        </label>
        <input
          value={this.state.value}
          onChange={this.onChange}
          onBlur={this.onBlur}
          id={id || label || type}
          type={type || 'text'}
          placeholder={placeholder}
          className={inputClassName}/>
      </FormGroup>
    )
  }
}

export default FormInput
