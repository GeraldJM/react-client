import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';


class App extends Component {
  state = {
    name: 'React'
  }

  render() {
    return (
      <div className="Container">
        <Navbar />
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;