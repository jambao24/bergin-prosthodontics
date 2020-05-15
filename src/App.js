import React, { Component } from 'react';
import './App.css';
import { Container, AppBar } from '@material-ui/core';
import Toolbar from './components/Toolbar';

class App extends Component {
  render() {
    return (
      <div className ="App">
        <Toolbar />
        <main style={{marginTop:'150px'}}> 
          <p> This is the page content!</p>
        </main>

      </div>
    )
  }
}
export default App;
