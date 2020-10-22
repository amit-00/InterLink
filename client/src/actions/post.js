import axios from 'axios';
import { setAlert } from './alert';
import { ADD_POST, GET_POSTS, POST_ERROR } from './types';

//Get latest posts
export const getPosts = () => async dispatch => {
    try{
        const res = await axios.get('/api/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    }
    catch(err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
    }
};

//Add post
export const addPost = formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    try{
        const res = await axios.post('/api/posts', formData, config)

        dispatch({
            type: ADD_POST,
            payload: res.data
        })
        dispatch(setAlert('Post Succesful!', 'success'));
    }
    catch(err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
    }
};