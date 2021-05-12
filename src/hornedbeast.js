import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

class hornedbeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  increaseVoteCount = () => {
    this.setState({count: this.state.count +1})
  }


  render() {
    return (
      <div id="hornedBeast">
        <Card style={{ width: '25rem'}}>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Img src={this.props.src} alt={this.props.alt} title={this.props.title} />
        <Card.Text>{this.props.description}</Card.Text>
        <Card.Text>{this.props.title} has {this.state.count} Votes</Card.Text>
        <Button variant="success" onClick={this.increaseVoteCount}>Increase Vote</Button>
        </Card>
      </div>
    )
  }
}

export default hornedbeast;