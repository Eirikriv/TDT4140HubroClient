
import React, { Component } from 'react';
import Navbar from './Navbar/index'
class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        {this.props.children}

	     </div>
    )
  }
}

export default App;
