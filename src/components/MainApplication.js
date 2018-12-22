import React, { Component } from 'react';
import ApplicationHeader from './ApplicationHeader';
import ApplicationContent from './ApplicationContent';

class MainApplication extends Component {
  render() {
    return (
      <div>
        <ApplicationHeader  />
        <ApplicationContent />
      </div>
    );
  }
}

export default MainApplication;