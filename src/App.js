import React, { Component } from 'react';
import SideNav from './components/SideNav';
import Main from './components/Main';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideNav: true
        };
        this.handleSideNavChange = this.handleSideNavChange.bind(this);
    }

    handleSideNavChange() {
        this.setState({
            showSideNav: !this.state.showSideNav
        });
        console.log(this.state.showSideNav);


        let main = document.getElementById('main');
        let nav = document.querySelector('nav');

        if (this.state.showSideNav) {
            main.classList.add('foo');
            nav.style.margin = "0px";
        } else {
            main.classList.remove('foo');
            nav.style.margin = "0 -300px 0 0";
        }
    }
    render() {
            return (
	      <div>
	        <SideNav onSideNavChange={this.handleSideNavChange} />
	        <Main onSideNavChange={this.handleSideNavChange} />
	      </div>
	    );
	}
}

export default App;
