import React, {Component} from 'react';
import uuid from 'uuid';

import {connect} from 'react-redux';
import {addTodo} from '../actions/todoActions';

class Todo extends Component{
  state = {
    text: ''
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();

    const newTodo = {
      id: uuid(),
      text: this.state.text
    }
    // console.log(this.props.addTodo())
    this.props.addTodo(newTodo);
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name='text' id="text" onChange={this.handleChange} placeholder="What do you need todo..." />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  todo: state.todos
})
export default connect(mapStateToProps, {addTodo})(Todo);
