import React, { Component } from 'react';
import Icon from './Icon';

class DialogItem extends Component{
	render(){
		return(
			<div onClick={this.props.clickHandle} className="DialogItem">
				<div className="DialogItem_info">
					<div className="DialogItem_title">{this.props.title}</div>
					<div className="DialogItem_stats">{this.props.stats} Cards</div>
				</div>
					<div className="arrow_right"> 
						<Icon  faIcon="fa-arrow-circle-o-right" />
					</div>
			</div>

		);
	}
}

export default DialogItem;