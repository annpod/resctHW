import React, { Component } from 'react';
import './App.css';


const Pane = React.createClass({
  displayName: 'Pane',
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});


const Tabs = React.createClass({
  displayName: 'Tabs',
  getDefaultProps() {
    return {
      selected: 0
    };
  },
  getInitialState() {
    return {
      selected: this.props.selected
    };
  },
  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  },
  _renderTitles() {
    function labels(child, index) {
      let activeClass = (this.state.selected === index ? 'active' : '');
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
  },
  _renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[this.state.selected]}
      </div>
    );
  },
  render() {
    return (
      <div className="tabs">
        {this._renderTitles()}
        {this._renderContent()}
      </div>
    );
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
      <Tabs selected={0}>
      <Pane label="Tab 1">
        <div>This is my tab 1 contents!</div>
      </Pane>
      <Pane label="Tab 2">
        <div>This is my tab 2 contents!</div>
      </Pane>
      <Pane label="Tab 3">
        <div>This is my tab 3 contents!</div>
      </Pane>
      </Tabs>
      </div>
    );
  }
}

export default App;
