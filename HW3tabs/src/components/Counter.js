import React, { Component } from 'react';

class Counter extends Component {
	constructor(props){
		super(props);
			this.state = {
				counter: 0
			}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.counter % 3  ?  false :  true;
	}

	render(){
		return (
			<div>
				<h1>{this.state.counter}</h1>
				<button onClick={()=>{this.setState({counter: this.state.counter + 1}) }}> Click </button>
			</div>
		)
	}

}
export default Counter;