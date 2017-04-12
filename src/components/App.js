
import React, { Component } from 'react';
import Outer from './outerComponent'
import Navbar from './Navbar2/index'
class App extends Component {
  render() {
    return (
      <Outer>
        <Navbar/>
        {this.props.children}
	</Outer>
    )
  }
}

export default App;
