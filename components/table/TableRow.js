import React from 'react'

const TableRow = (props) => (
  <tr onClick={props.onClick}>{props.children}</tr>
)

export default TableRow
