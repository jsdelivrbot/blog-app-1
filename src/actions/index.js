import axios from 'axios'

//poiuytghjklmnb
const API_KEY=`123`;
const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts?key=${API_KEY}`;

export const FETCH_POST = 'FETCH_POST'

export function fetchPosts(){
    const request = axios.get(ROOT_URL)
    
    return ({type : FETCH_POST,
        payload : request
    })
}