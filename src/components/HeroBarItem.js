import React, { Component } from 'react';
import Icon from './Icon';
class HeroBarItem extends Component{

	render(){

		if(this.props.icon !== ""){
			return (
				<button onClick={this.props.action} className={"gray_bar_cat "}>
					<Icon faIcon={this.props.icon} /> <span className="textSpace">{this.props.name} </span>
				</button>
		
			);
		}
		return(
			<div className="gray_bar_cat holly">
				{this.props.name}
			</div>
		);
	}
}

export default HeroBarItem;