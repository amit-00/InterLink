import { GET_POSTS, POST_ERROR, ADD_POST } from '../actions/types';

const initiaLState = {
    posts: [],
    loading: true,
    error: {}
}

export default function ( state = initiaLState, action ) {
    const { type, payload } = action;

    switch(type){
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false
            }
        
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, payload],
                loading: false
            }

        case POST_ERROR:
            return {
                ...state,
                posts: null,
                loading: false,
                error: payload
            }

        default:
            return state
    }

}