import React, {
    Component
} from 'react';
import './Main.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

// Modal.setAppElement('#mainElement')

class Main extends React.Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
       // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    render() {
        return (
        <div>
        <button className="Button" type="button" onClick={this.openModal}> Click Me! </button>

        <Modal 
            isOpen = {this.state.modalIsOpen}
            onAfterOpen = {this.afterOpenModal}
            onRequestClose = {this.closeModal}
            contentLabel = "Example Modal"
        >

          <div className="Headcount"> Headcount </div>
            
        </Modal>
        </div>
        );
    }
}

export default Main;