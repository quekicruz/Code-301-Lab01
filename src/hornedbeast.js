import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import HBModal from './modal.js';
import HBForm from './hbform.js';

class hornedbeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      modalState: false,

    }
  }

  increaseVoteCount = () => {
    this.setState({count: this.state.count +1})
  }

  modalView = () => {
    this.setState({ modalState:true })
  }

  closeModal = () => {
    this.setState({modalState:false})
  }




  render() {
    return (
      <div id="hornedBeast">
        <Card style={{ width: '24rem'}}>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Img src={this.props.src} alt={this.props.alt} title={this.props.title} />
        <Card.Text>{this.props.description}</Card.Text>
        <Card.Text>The Amount of Horns this Horned Beast Has: {this.props.horns} </Card.Text>
        <Card.Text>{this.props.title} has {this.state.count} Votes</Card.Text>
        <Button variant="success" onClick={this.increaseVoteCount}>Increase Vote</Button>
        <Button onClick={this.modalView}>Click here to view {this.props.title} At Large</Button>
        </Card>
        <HBModal
          newModal={this.state.modalState}
          closeModal={this.closeModal}
          title={this.props.title}
          src={this.props.src}
          description={this.props.description}
          keyword={this.props.keyword}
          />
      </div>
    )
  }
}

export default hornedbeast;