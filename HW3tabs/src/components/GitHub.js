import React, { Component } from 'react';
import RepoItem from './RepoItem';

const url = `https://api.github.com/users/annpod/repos`;

class GitHub extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
     fetch(url).then(data => data.json()).then(data =>{
      this.setState({data:data});
      });
  }
  render() {
    return (

      <ol>
       {this.state.data.map((elem, index) => {
         return <RepoItem elem={elem} key={index} />
       })}
      </ol>
    );
  }
}

export default GitHub;
