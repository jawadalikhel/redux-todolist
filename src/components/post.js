import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

class Post extends Component{
  constructor(){
    super();
    this.state = {
      id: null,
      post: null
    }
  }
  componentDidMount(){
    let id = this.props.match.params.post_id;
    console.log(id, ' the params')

    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((res) =>{
        this.setState({
          post: res.data
        })
        console.log(res, 'THE DATA')
      })

  }
  render(){
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">Post #{this.state.post.id}</h4>
        <h3 className="center">Title: {this.state.post.title}</h3>
        <h6 className="center">Body: {this.state.post.body}</h6>
        <Link to="/">Home</Link>
      </div>
    ) : (
      <div>Loading post...</div>
    )
    return(
      <div className="container">
        <h4>{post}</h4>
      </div>
    )
  }
}

export default Post;
