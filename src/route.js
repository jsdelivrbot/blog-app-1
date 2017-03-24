import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import PostIndex from './components/post-index'
import PostNew from './components/post-new'
import PostDetail from './components/post-detail'

export default (
    <Route path= "/" component={App} >
        <IndexRoute component={PostIndex} />
        <Route path = "posts/new" component={PostNew} />
        <Route path = "posts/:postId" component={PostDetail} />
    </Route>
)
