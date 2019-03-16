import React , { Component }from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';




class Clock extends Component {
	constructor(props){
		super(props);
		this.state = {
			date: new Date(),
			number:0
		};

		

	}

	action=(e) =>{
		e.preventDefault();
		this.setState({number: this.state.number+1});
	}
	

	render(){
		return (
			<div>
				<button onClick={this.action} >Click me {this.state.number}  </button>
				<h1>Helllo World !</h1>
				<h2> the time is {this.state.date.toLocaleTimeString()}</h2>
			</div>
		);
	}

}

ReactDOM.render(	<Clock />
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
