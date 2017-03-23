import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionsCreator } from 'redux'
import { Link } from 'react-router'

import { fetchPosts } from '../actions/index'


class PostIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return(
            <div>
            <Link to="/posts/new" className="btn btn-primary"> Add a Post </Link>
             </div>
        )
        
    }
}

export default connect(null, {fetchPosts} )(PostIndex)