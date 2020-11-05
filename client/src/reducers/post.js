import { GET_POSTS, POST_ERROR, ADD_POST, UPDATE_LIKES, DELETE_POST, GET_POST, CLEAR_POST, ADD_COMMENT, DEL_COMMENT } from '../actions/types';

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

        case GET_POST:
            return {
                ...state,
                post: payload,
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

        case ADD_COMMENT:
            return {
                ...state,
                post: {
                    ...state.posts,
                    comments: payload
                },
                loading: false
            }

        case DEL_COMMENT:
            return {
                ...state,
                post: {
                    ...state.posts,
                    comments: state.post.comment.filter(comment => comment._id !== payload)
                },
                loading: false
            }
        
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload.postId),
                loading: false
            }

        case CLEAR_POST:
            return {
                ...state,
                post: null,
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