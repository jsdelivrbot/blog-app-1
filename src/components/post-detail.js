import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getPost, deletePost } from '../actions/index'

class PostDetail extends Component {
  static contextTypes = {
    router : PropTypes.object
  }

  constructor(){
    super()

    this.state = {selectedPost : null}
  }

  componentDidMount(){
    this.props.getPost(this.props.params.postId)

  }

  onDelete(postId){
    this.props.deletePost(postId).then(() => {
      this.context.router.push("/")
    })
  }

  render(){
    const { selectedPost } = this.props
    if(!selectedPost){
      return <div>Loading...</div>
    }
    return (
      <div>
        <div className="text-xs-right"><Link to="/">Back To Main</Link></div>
        <h3>Title:{selectedPost.title}</h3>
        <h5>categories:{selectedPost.categories}</h5>
        <p>Content:{selectedPost.content}</p>
        <button className="btn btn-danger" onClick={this.onDelete.bind(this, selectedPost.id)}>Delete</button>
      </div>
    )
  }
}

function mapState(state){
  return { selectedPost : state.posts.selectedPost }
}

export default connect(mapState, { getPost, deletePost })(PostDetail)
