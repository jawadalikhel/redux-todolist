import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Todos from './components/Todos';
import AddForm from './components/AddForm';

import Post from './components/post';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
