import React, { Component } from 'react';
import TodoList from './components/todoList';
import AddTodo from './components/addTodo';

import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AddTodo />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
