import React, { Component } from 'react';

class App extends Component {
  state = {
    name: 'React'
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
      </div>
    )
  }
}

export default App;