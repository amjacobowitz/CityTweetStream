import React from 'react';
import {render} from 'react-dom';
import App from './App.js';

class Main extends React.Component{
	render () {
		return (
			<div>
				<App />
			</div>
		)
	}
}

render(<Main />, document.getElementById('app'))