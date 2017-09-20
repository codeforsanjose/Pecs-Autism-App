import React, { Component } from 'react';

class Icon extends Component{
	render(){
		return(
			<i onClick={this.props.clickHandle}  className={`fa ${this.props.faIcon}`} aria-hidden="true"></i>
		);
	}
}

export default Icon;