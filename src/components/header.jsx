import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header>
				<img id="logo" src="http://daynin.github.io/clojurescript-presentation/img/react-logo.png" />
				<h1>Reactiplate</h1>
			</header>
		);
	}
}

export default Header;