import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.timer = null;

		this.findVideo = this.findVideo.bind(this);
	}
	findVideo() {
		clearTimeout(this.timer);
		this.timer = setTimeout(() => this.props._Search(this.textInput.value), 1000);
	}
	render() {
		let textInput = null;

		return (
		<div className="search-bar navbar">
			{textInput}
			<input className='searchField' type="text" placeholder='Search' onChange={this.findVideo} ref={(input) => this.textInput = input} />
		</div>

		);
	}
}

export default Search;
