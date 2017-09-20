import React, { Component } from 'react';
import Avatar from './Avatar';

class HeroCard extends Component {
	render(){
		return(
			<div> 
				<Avatar alt="" source="https://ct.yimg.com/cy/8559/22784523518_a7f71eabe0_90sq.jpg?ct=fantasy"/>
				<div className="hero_card_buttons">
					<div className="hero_card_name">{this.props.name}</div>
					<p> 52 points</p>
				</div>
			</div>
		);
	}
}

export default HeroCard;