import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions';

class Counter extends Component {
	showHistory(prevCounters) {
		return prevCounters.map((num,index) =>
			<li key={index}>{num}</li>
		)
	}
	render() {
		const {counter, increment, decrement, reset, filter, prevCounters} = this.props;
		console.log(prevCounters);
		const history = this.showHistory(prevCounters);
		return(
			<div>
				Counter:
				<span>{counter}</span>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
				<button onClick={reset}>Reset</button>
				<button onClick={filter}>Filter</button>
				<span>{history}</span>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	counter: state.counter,
	prevCounters: state.prevCounters
});

const mapDispatchToProps = dispatch => {
	return{
		...bindActionCreators(actions, dispatch)

	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);