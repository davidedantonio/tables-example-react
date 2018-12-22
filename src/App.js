import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import MainApplication from './components/MainApplication';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MainApplication />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
