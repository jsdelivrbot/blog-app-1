import React from 'react'
import { FETCH_POST } from '../actions/index'


export default function( state = null, action){
    switch(action.type){
        //case FETCH_POST : return action.payload.data
        default : return state
    }
}