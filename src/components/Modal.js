import React, { Component } from 'react';

class Modal extends Component{
    constructor(props){
        super(props);
        this.state = {
            isActive:"isActive"
        }
    }

    closeModal(){
        this.setState({isActive:""});
    }
	render(){

        
		return(
			<div className={"modal" + this.state.isActive}>
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">{this.props.title}</p>
                <button className="delete" aria-label="close"></button>
              </header>
              <section className="modal-card-body">
                {this.props.children}
              </section>
              <footer className="modal-card-foot">
                <button className="button is-success">Save changes</button>
                <button className="button" onclick={this.closeModal}>Cancel</button>
              </footer>
            </div>
          </div>
        );
        
	}
}

export default Modal;