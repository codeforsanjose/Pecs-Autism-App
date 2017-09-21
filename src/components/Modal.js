import React, { Component } from 'react';
import '../bulma.css';

class Modal extends Component {
	render(){
		return(
			<div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                    <p className="modal-card-title">{this.props.title}</p>
                    <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                    testing 123
                    </section>
                    <footer className="modal-card-foot">
                    <button className="modalButton is-success">Save changes</button>
                    <button className="modalButton">Cancel</button>
                    </footer>
                </div>
            </div>
		);
	}
}

export default Modal;