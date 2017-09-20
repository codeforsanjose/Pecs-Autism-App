import React from 'react';


const SideNav = (props) => {
	return(
	<div id="sideNav" className="SideNav">
			<nav>
			<div className="user-bar">
				<i onClick={props.onSideNavChange} className="SideNav_close fa fa-times" aria-hidden="true"></i>
			</div>
			<ul>
	            <li>
	                <a href="">Home</a>
	            </li>
	            <li>
	                <a href="">Global Settings</a>
	            </li>
	        </ul>
	        </nav>
	</div> );
}



export default SideNav;
