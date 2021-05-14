import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class HBModal extends React.Component {
  constructor(props) {
    super(props);
  }


render() { 
  console.log(this.props)
  return (
    <div id="Modal">
      <Modal show={this.props.newModal} onHide ={this.props.closeModal} style={{width: '50%'}}>
        <Modal.Title>{this.props.title}</Modal.Title>
        <Modal.Body>
          <img src={this.props.src} alt ={this.props.alt} title={this.props.title}/>
          <p>{this.props.description} </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant= "success" onClick={this.props.closeModal}>
              Press to Leave {this.props.title}
          </Button>
        </Modal.Footer>
        </Modal>
    </div>
  )
  }
}

export default HBModal;