import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {id: 1, content: 'buy some milk'},
        {id: 2, content: 'go to friday meeting'},
      ]
    }
  }
  render() {
    return (
      <div>
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
