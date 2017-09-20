import React, { Component } from 'react';
import HeroBar from './HeroBar';
import HeroCard from './HeroCard';

class Hero extends Component{
	render(){
		return(
			<div className="hero">
				<HeroCard name="Vincent Luong"/>
				<HeroBar 
					settingsItems={this.props.settingsItems}
					isActive={this.props.isActive}
					categoryItems={this.props.categoryItems}
					windowType={this.props.windowType}/>
			</div>
			);
	}
}

export default Hero;