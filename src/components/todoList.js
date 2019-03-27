import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTodos, deleteTodo} from '../actions/todoActions';
import propTypes from 'prop-types';

class TodoList extends Component{
  componentDidMount(){
    this.props.getTodos();
    // console.log(this.props.getTodos(), '<---- this is action.type')
  }

  deleteHandler = (id) =>{
    this.props.deleteTodo(id);
  }
  render(){
    const {todos} = this.props.todo;
    // console.log(this.props.todo, '<--- this is the items array')
    // console.log(todos, 'TODOS')
    return(
      <div>
        {todos.map(({id, text}) =>(
          <div key={id}>
            <button onClick={this.deleteHandler.bind(this, id)}>&times;</button>
            {text}
          </div>
        ))}
      </div>
    )
  }
}

TodoList.propTypes = {
  getTodos: propTypes.func.isRequired,
  todo: propTypes.func.isRequired
}

const mapStateToProps = (state) =>({
  todo: state.todo
})

export default connect(mapStateToProps, {getTodos, deleteTodo})(TodoList);
