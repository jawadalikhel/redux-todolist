import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Todos from './Todos';
import AddForm from './AddForm';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      posts: [],
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res =>{
        console.log(res.data, 'response')
        this.setState({
          posts: res.data.slice(0,5),
        })
      }))
  }

  addTodo = (todo) =>{
    todo.id = Math.random();
    let newTodos = [...this.state.todos, todo]

    this.setState({
      todos: newTodos
    })
  }

  deleteTodo = (id) =>{
    console.log(id, 'ID')

    const newTodos = this.state.todos.filter((todo) =>{
      return todo.id !== id
    })

    this.setState({
      todos: newTodos
    })
  }

  render() {
    const {posts} = this.state;
    const postList = posts.length ? (
      posts.map((post) =>{
        return(
          <div key={post.id} className="post card">
            <div className="card-content">
              <img src="https://github.com/iamshaunjp/react-redux-complete-playlist/blob/lesson-33/poketimes/src/pokeball.png?raw=true"/>

              <Link to={'/' + post.id}>
                <h4>{post.id}</h4>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </Link>
            </div>
          </div>
        )
      })
    ) : (
      <div>No posts yet</div>
    )
    return (
      <div className="todo-app container home">
        <h1 className="center blue-text">Todos</h1>

        <AddForm addTodo={this.addTodo} />

        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <h3 style={{'textDecoration': 'underline','margin':'auto'}}>Fetching json placeholder data using axios</h3>
        {postList}
      </div>
    );
  }
}

export default Home;
