import React, {Component} from 'react';
import Reboot from 'material-ui/Reboot';
import Navbar from './AppBar/AppBar';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Reboot />
				<Navbar />
			</div>
		);
	}
}

export default App;
