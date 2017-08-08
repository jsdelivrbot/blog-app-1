import axios from 'axios'

//poiuytghjklmnb
const API_KEY='?key=raget321';
const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts`;

export const FETCH_POST = 'FETCH_POST'
export const GET_POST = 'GET_POST'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const NULL_POST = 'NULL_POST'

export function fetchPosts(){
    const request = axios.get(ROOT_URL + API_KEY)
    return (dispatch) => {
        request.then(({ data }) => {
          dispatch({type : FETCH_POST, payload : data})
        })
    }
}

export function getPost(postId){
  const request = axios.get(`${ROOT_URL}/${postId}${API_KEY}`)
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({type : GET_POST, payload : data})
    })
  }
}

export function createPost(data, callback){
  const request = axios.post(ROOT_URL + API_KEY, data)
  return (dispatch) => {
    request.then(({ data }) => {
      callback()
      dispatch({type : CREATE_POST, payload : data})
    })
  }
}

export function deletePost(postId, callback){
  const request = axios.delete(`${ROOT_URL}/${postId}${API_KEY}`)
  return (dispatch) => {
    request.then(({ data }) => {
      callback()
      dispatch({type : DELETE_POST, payload : data})
    })
  }
}

export function nullPost(){
  return({type : NULL_POST })
}
