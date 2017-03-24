import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router'

import { createPost } from '../actions/index'

class PostNew extends Component {
    static contextTypes = {
      router : PropTypes.object
    }

    onSubmit(data) {
      this.props.createPost(data)
        .then(() => {
          this.context.router.push("/")
      })
    }

    render() {
        const {fields : {title, categories, content}, handleSubmit} = this.props
        return(
            <div>
              <div className="text-xs-right">
                <Link to="/"> Back To Index </Link>
              </div>
              <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <h3> Create a new post </h3>
                  <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className="text-help">{title.touched ? title.error : ''}</div>
                  </div>
                  <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Category</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="text-help">{categories.touched ? categories.error : ''}</div>
                  </div>
                  <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                    <div className="text-help">{content.touched ? content.error : ''}</div>
                  </div>
                  <button className="btn btn-primary" type="submit">Submit</button>
                  <Link className="btn btn-danger" to="/"> Cancel </Link>
                </form>
            </div>
            </div>
        )
    }
}

function validate(data){
  const error = {}
  if(!data.title){
    error.title = 'Enter title'
  }
  if(!data.categories){
    error.categories = 'Enter categories'
  }
  if(!data.content){
    error.content = 'Enter content'
  }
  return error
}

export default reduxForm({
    form : 'PostNewForm',
    fields : ['title', 'categories', 'content'],
    validate
}, null, { createPost } )(PostNew)
