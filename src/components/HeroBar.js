import React, { Component } from 'react';
import HeroBarItem from './HeroBarItem';

class HeroBar extends Component{
	render(){
		let displayMenu;

		let settings_item =  this.props.settingsItems.map((item) => {
			return (
				<HeroBarItem key={item.title} 
							icon={item.icon} 
							name={item.title}
							isActive={this.props.isActive}
							action={item.action}  
							style={item.style}/>
			);
		});
		let category_item =  this.props.categoryItems.map((item) => {
			return (
				<HeroBarItem 
				key={item.title} 
				icon={item.icon} 
				name={item.title} 
				action={item.action}/>
			);
		});


		if(this.props.windowType === 'settings'){
			displayMenu = settings_item;
		}
		else{
			displayMenu = category_item;
		}
		return(
			<div className="gray_bar">
				{displayMenu}
			</div>
		);
	}	
}

export default HeroBar;