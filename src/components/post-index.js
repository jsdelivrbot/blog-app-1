import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { fetchPosts, nullPost } from '../actions/index'


class PostIndex extends Component {
    componentDidMount() {
        this.props.nullPost()
        this.props.fetchPosts()
    }

    renderPosts() {
      return this.props.allPosts.map((post) => {
        return (
            <li className="list-group-item" key={post.id}>
            <Link to={`posts/${post.id}`}>{post.title}</Link>
            </li>
          )
      })
    }

    render() {
        return(
          <div>
            <div className="text-xs-right">
              <Link to="/posts/new" className="btn btn-primary"> Add a Post </Link>
            </div>
            List of blog posts
            <div>
              <ul className="list-group">{this.renderPosts()}</ul>
            </div>
          </div>
        )

    }
}

function mapState(state){
  return { allPosts : state.posts.allPosts }
}

export default connect(mapState, { fetchPosts, nullPost } )(PostIndex)
