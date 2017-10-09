import React, { Component } from 'react';

class Modal extends Component{
    constructor(props){
        super(props);
        this.state = {
            isActive:"is-active"
        }


        this.closeModal = this.closeModal.bind(this);
        this.addCardHandle = this.addCardHandle.bind(this);
    }

    closeModal(){
        this.setState({isActive:"not-active"});
    }

    addCardHandle(){
        console.log("this works!!!?!?");
    }
	render(){

        
		return(
			<div className={"modal " + this.state.isActive}>
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">{this.props.title}</p>
                <button className="delete" aria-label="close" onClick={this.closeModal}></button>
              </header>
              <section className="modal-card-body">
                {this.props.children}
              </section>
              <footer className="modal-card-foot">
                <button className="button is-success">Save changes</button>
                <button className="button" onClick={this.closeModal}>Cancel</button>
              </footer>
            </div>
          </div>
        );
        
	}
}

export default Modal;