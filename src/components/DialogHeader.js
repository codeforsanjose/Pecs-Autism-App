import React, { Component } from 'react';
import Icon from './Icon';

class DialogHeader extends Component {
	render(){
		return(
			<div className="dialog_header">
				<div className="container">
					<Icon clickHandle={this.props.clickHandle} faIcon="fa-times"/>
					<h3> {this.props.title} </h3>
					<i className="empty"></i>
				</div>
			</div>
		);
	}
}

export default DialogHeader;