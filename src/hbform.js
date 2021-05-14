import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class HBForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      numberofHorns:0,
      findHorns: this.props.findHorns,
    }
  }

  // handleHorns = (event) => {
  //   let value = event.target.value;
  //   console.log(value)
  //   this.setState({ numberOfHorns: value });
  // }

  render () {
    return (
      <div id='form'>
        <Form>
        <Form.Group controlId="HornSelection">
      <Form.Label>Find The Horned Beast By Horns</Form.Label>
      <Form.Control onChange={this.props.handleHorns} as="select">
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>100</option>
    </Form.Control>
    <Button variant="success" onClick={this.props.handleHorns}>
      Submit For Specific Horned Beast
    </Button>
  </Form.Group>
        </Form>
      </div>
    )
  }
}



export default HBForm; 