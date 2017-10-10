import React, { Component } from 'react';
import Icon from './Icon';
import FullScreenDialog from './FullScreenDialog';


class Header extends Component{
	constructor(props){
		super(props);

		this.state = {
      		settingsVisible: true 
    	}

    	this.settingsShow = this.settingsShow.bind(this);
    	
	}

	settingsShow(){
		this.setState({settingsVisible:!this.state.settingsVisible});
		let settingsScreen = document.getElementById('fsd');
		if(this.state.settingsVisible){
			settingsScreen.style.display="inline";
		}
		else{
			settingsScreen.style.display="none";
		}
	}
	render(){

		return (
			<div className="Header">
			
				<FullScreenDialog categories={this.props.categories} 
					deleteCards={this.props.deleteCards}
					addItems={this.props.addCard}
					cards={this.props.cards} 
				 	clickHandle={this.settingsShow}/>

				<div className="container">
					<div className = "user_icons">
						<Icon clickHandle={this.settingsShow} faIcon="fa-cog" />
						<Icon faIcon="fa-unlock-alt" />
					</div>
				    <h2><span className="logo-red">K</span><span className="logo-orange">i</span><span className="logo-yellow">d</span><span className="logo-green">s</span>Craft</h2>
			       	<Icon clickHandle={this.props.inSideNavChange} faIcon="fa-bars" />
				</div>
			</div>
		);
	}

}



export default Header;