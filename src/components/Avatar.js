import React, { Component } from 'react';

class Avatar extends Component{
	render(){
		return(
			<img alt="" className="hero_avatar" src={this.props.source} />
		);
	}
}

export default Avatar;