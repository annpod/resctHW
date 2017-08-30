import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions';
import { recipes } from '../data/recipes';

class Book extends Component {
	showHistory(prevCounters) {
		return prevCounters.map((num, index) =>
			<li key={index}>{num}</li>
		)
	}
	render() {
		console.log(recipes);
		const {counter, increment, decrement, reset, filter, prevCounters} = this.props;
		let history = this.showHistory(prevCounters);
		return(
			<div>
				<br/>
				Counter:
				<span>{counter}</span>
				<br/>
				<br/>
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
	counter: state.counterReducer.counter,
	prevCounters: state.counterReducer.prevCounters
});

const mapDispatchToProps = dispatch => {
	return{
		...bindActionCreators(actions, dispatch)

	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);