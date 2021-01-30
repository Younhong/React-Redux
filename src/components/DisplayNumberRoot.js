import React, { Component } from 'react';
import DisplayContainer from '../containers/DisplayContainer';

class DisplayNumberRoot extends Component {
    render() {
      return (
        <div>
          <h1>Display Number Root</h1>
          <DisplayContainer unit="kg" />
        </div>
      )
    }
}

export default DisplayNumberRoot;