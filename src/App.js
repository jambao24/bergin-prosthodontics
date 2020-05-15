import React from 'react';
import './App.css';
import { Container, AppBar } from '@material-ui/core';

function App() {
  return (
    <Container root>
      <AppBar position="static">Navigation bar</AppBar>
      <div>Another component</div>
    </Container>
  );
}

export default App;
