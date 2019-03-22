import React, {Component} from 'react';

class AddTodo extends Component{
  constructor(){
    super()
    this.state = {
      content: ''
    }
  }

  handleSubmit = (e) =>{
    try {
      e.preventDefault();

      this.props.addTodo(this.state);
      this.setState({
        content: ''
      })
    } catch (err) {
      console.log(err, 'error in AddTodo')
    }
  }

  handleChange = (e) =>{
    this.setState({
      content: e.target.value
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          <input type="text" value={this.state.content } onChange={this.handleChange} placeholder="Enter your todo" />
          <button>Add Todo</button>
        </form>
      </div>
    )
  }
}

export default AddTodo;
