import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import PostIndex from './components/post-index'

const test = () => {
    return <div>Test!!!</div>    
}

export default (
    <Route path= "/" component={App} >
        <IndexRoute component={PostIndex} />
        <Route path="test" component={test} />
    </Route>
)
