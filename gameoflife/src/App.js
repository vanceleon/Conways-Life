import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridContainer from './components/gridContainer';
import Details from './components/details';

class App extends Component {
  render() {
    return (
      <div className="container">

        <div className="banner">
          Game of Life by Vance Leon  
          <Details/>
        
        </div>
        
        <GridContainer/>



      </div>
    );
  }
}

export default App;