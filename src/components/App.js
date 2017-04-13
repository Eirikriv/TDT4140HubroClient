
import React, { Component } from 'react';
import Outer from './outerComponent'
import Navbar from './Navbar/index'
import Footer from './Footer/index'
class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        {this.props.children}
      <Footer/>
	     </div>
    )
  }
}

export default App;
