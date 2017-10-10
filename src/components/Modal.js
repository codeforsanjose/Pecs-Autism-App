import React, { Component } from 'react';

class Modal extends Component{
    constructor(props){
        super(props);

        this.state= {
            closeModal:false
        };
        this.closeModal = this.closeModal.bind(this);
        this.save = this.save.bind(this);

    }


    closeModal(){
        this.setState({closeModal:true});
        this.props.closeModal();

    }
    
    save(){
        this.props.addItems(this.refs.name.value);
        this.closeModal();
    }

	render(){
        let isActive = false;
        if ( ( !this.state.closeModal ) && ( this.props.active )){
            isActive = "is-active";
        }


        else{
            isActive = "is-not";
        }
        
        

		return(
			<div className={"modal " + isActive}>
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">{this.props.title}</p>
                <button className="delete" aria-label="close" onClick={this.closeModal}></button>
              </header>
              <section className="modal-card-body">
                <div className="field">
                    <label className="label">Card Name</label>
                    <div className="control">
                        <input className="input" ref="name" type="text" placeholder="Ex: 'Ball'" />
                    </div>
                </div>


              </section>
              <footer className="modal-card-foot">
                <button className="button is-success" onClick={this.save}>Save changes</button>
                <button className="button" onClick={this.closeModal}>Cancel</button>
              </footer>
            </div>
          </div>
        );
        
	}
}

export default Modal;