import React, { Component } from 'react';

class HomePage extends Component {
	render() {
		return (
			<div>
				<div className="hero">
					This is a hero div.
				</div>
				<div className="description">
					<h2>What is Reactiplate?</h2>
					<p>Reactiplate is a simple React boilerplate for React beginners. It includes React, Node.js, Webpack, Babel/ES6, SASS support, and Bootstrap.</p>

					<h2>How Do I Use It?</h2>
					<ol>
						<li>npm install</li>
						<li>npm run build</li>
						<li>npm start</li>
						<li>Go to http://localhost:8080</li>
					</ol>

					<h2>Why Did I Make It?</h2>
					<p>I made this because I couldn't find a beginner friendly React boilerplate that had support for ES6 and SASS. Also, I got really bored.</p>
				</div>
			</div>
		)
	}
}

export default HomePage;