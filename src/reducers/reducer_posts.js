import React from 'react'
import { FETCH_POST, GET_POST, NULL_POST } from '../actions/index'

const INITIAL_STATE = { allPosts : [], selectedPost :  null }

export default function( state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_POST : return { ...state, allPosts : action.payload }
        case GET_POST : return { ...state, selectedPost : action.payload }
        case NULL_POST : return { ...state, selectedPost : null }
        default : return state
    }
}
