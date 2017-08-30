import React, { Component } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Tab from './components/Tab';
import GitHub from './components/GitHub';
import Counter from './components/Counter';
class App extends Component {

	render() {
    return (
      <div className="App">
		  <Tabs active={0}>
			  <Tab label="GitHub">
				<GitHub />
			  </Tab>
			  <Tab label="Counter">
				  <Counter />
			  </Tab>
			  <Tab label="Author">
				<div>Ann</div>
			  </Tab>
		  </Tabs>
      </div>
    );
  }
}

export default App;
