import { GET_POSTS, POST_ERROR, ADD_POST, UPDATE_LIKES, DELETE_POST } from '../actions/types';

const initiaLState = {
    posts: [],
    post: null,
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
        
        case UPDATE_LIKES:
            return {
                ...state,
                posts: state.posts.map(post => post._id === payload.postId ? { ...post, likes: payload.likes } : post),
                loading: false
            }
        
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload.postId),
                loading: false
            }

        case POST_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state
    }

}