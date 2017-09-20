import React, { Component } from 'react';

class Card extends Component {

	render(){
		let style;
		if (this.props.isActive.includes(this.props.title)){
			style = "isActive";
		}
		else{
			
		}
		return(
			<div onClick={this.props.clickHandle} className={"Card " + (style)}>
				<div className="Card_img"><img src={this.props.img} alt={this.props.title} /></div>
				<div className="Card_title">{this.props.title}</div>
			</div>
		);
	}
}

export default Card;