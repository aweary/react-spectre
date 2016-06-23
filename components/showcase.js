import React, {Component} from 'react';

import Highlight from './Highlight'
import Blockquote from './Blockquote';

import DefaultButton from './buttons/DefaultButton';
import PrimaryButton from './buttons/PrimaryButton';
import LinkButton from './buttons/LinkButton';
import ButtonGroup from './buttons/ButtonGroup';

import Table from './table/Table';
import SearchableTable from './table/SearchableTable';
import TableHead from './table/TableHead';
import TableBody from './table/TableHead';
import TableHeaderColumn from './table/TableHeaderColumn';
import TableRowColumn from './table/TableRowColumn';
import TableRow from './table/TableRow';

import Form from './form/Form'
import FormInput from './form/FormInput'

import Grid from './grid/Grid'
import GridItem from './grid/GridItem'
import GridRow from './grid/GridRow'

const containerStyle = {
  width: 900,
  margin: '0 auto',
  padding: 20,
}

const ruleStyle = {
  margin: 50
}


export default class Showcase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dark: false
    }
  }

  render () {
  const tableData = [
    {
      name: 'Brandon',
      age: 23
    },
    {
      name: 'Teri',
      age: 24
    },
    {
      name: 'Minnie',
      age: 6
    },
  ]

    const buttonStyle = {margin: 10}
    return (
      <div style={containerStyle}>
        <h2>Paragraphs</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <Highlight>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</Highlight> consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>Blockquotes</h2>
        <Blockquote source='Foobar Bazqux'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Blockquote>
        <h2>Buttons</h2>
        <DefaultButton style={buttonStyle} label='Default button'/>
        <DefaultButton style={buttonStyle} icon='markunread' label='Default button'/>
        <DefaultButton style={buttonStyle} small label='Small button'/>
        <DefaultButton style={buttonStyle} large label='Large button'/>
        <DefaultButton style={buttonStyle} block label='Block button'/>
        <br/>
        <PrimaryButton color='#F3C3D4' style={buttonStyle} label='Primary button'/>
        <PrimaryButton loading style={buttonStyle} label='Primary button'/>
        <PrimaryButton style={buttonStyle} small label='Primary small'/>
        <PrimaryButton style={buttonStyle} large label='Primary large'/>
        <PrimaryButton style={buttonStyle} block label='Primary Block'/>
        <hr/>
        <LinkButton style={buttonStyle} label='Primary button'/>
        <LinkButton style={buttonStyle} loading label='Primary button'/>
        <LinkButton style={buttonStyle} small label='Primary small'/>
        <LinkButton style={buttonStyle} large label='Primary large'/>
        <hr style={ruleStyle}/>
        <h2>Button Groups</h2>
        <ButtonGroup>
          <DefaultButton label='First' />
          <DefaultButton label='Second' />
          <DefaultButton label='Third' />
        </ButtonGroup>
        <br/>
        <ButtonGroup block>
          <PrimaryButton label='First' />
          <PrimaryButton label='Second' />
          <PrimaryButton label='Third' />
        </ButtonGroup>
        <hr style={ruleStyle}/>
        <h2>Tables</h2>

        <SearchableTable
          renderRows={data => (
            <TableRow>
              <TableRowColumn>{data.name}</TableRowColumn>
              <TableRowColumn>{data.age}</TableRowColumn>
            </TableRow>
          )}
          data={tableData}
          filter={['name', 'age']}>
          <TableHead>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Age</TableHeaderColumn>
          </TableHead>
        </SearchableTable>
        <hr style={ruleStyle}/>
        <h2>Forms</h2>
        <Form>
          <FormInput
            validate={value => {
              if (value !== 'Brandon' || '') {
                return 'Value must be Brandon'
              }
            }}
            label='Name'
            placeholder='Enter your name' />
          <FormInput
            label='Email'
            type='email'
            placeholder='Enter your email' />
          <FormInput
            label='Password'
            type='password'
            placeholder='Enter your email' />
        </Form>
        <hr style={ruleStyle} />
        <h2>Flexbox Grid</h2>
        <Grid>
          <GridRow>
            <GridItem width={12}>12</GridItem>
          </GridRow>
          <GridRow>
            <GridItem width={6}>6</GridItem>
            <GridItem width={6}>6</GridItem>
          </GridRow>
          <GridRow>
            <GridItem width={4}>4</GridItem>
            <GridItem width={4}>4</GridItem>
            <GridItem width={4}>4</GridItem>
          </GridRow>
        </Grid>

      </div>

    )
  }
}
