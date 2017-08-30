import React, { Component } from 'react';

class Tabs extends Component {
	constructor(props){
		super(props);
		this.state = {
			active: 0
		};
	}
	handleClick(index, event) {
		event.preventDefault();
		this.setState({
			active: index
		});
		this.handleClick =this.handleClick.bind(this);
	}

	_renderTitles() {
		function labels(child, index) {
			let activeClass = (this.state.active === index ? 'active' : '');
			return (
				<li key={index}>
					<a href="#"
						className={activeClass}
						onClick={this.handleClick.bind(this, index)}>
						{child.props.label}
					</a>
				</li>
			);
		}

		return (
			<ul className="tabs__labels">
				{this.props.children.map(labels.bind(this))}
			</ul>
		);
	}
	_renderContent() {
		return (
			<div className="tabs__content">
				{this.props.children[this.state.active]}
			</div>
		);
	}
	render() {
		return (
			<div className="tabs">
				{this._renderTitles()}
				{this._renderContent()}
			</div>
		);
	}
};

export default Tabs;