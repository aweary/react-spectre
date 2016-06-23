import React from 'react'

const FormGroup = (props) => (
  <div className={`form-group ${props.className}`}>
    {props.children}
  </div>
)

export default FormGroup
