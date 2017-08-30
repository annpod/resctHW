import React, { Component } from 'react';
import './App.css';
import Tebs from './Tabs';


class App extends Component {
	
  render() {

    return (

		<Tabs>
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
    );
  }
}

export default App;