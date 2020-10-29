import axios from 'axios';
import { setAlert } from './alert';
import { ADD_POST, GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST } from './types';

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

//Add like to post
export const addLike = postId => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    try{
        const res = await axios.put(`/api/posts/like/${postId}`, config);

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: res.data }
        })
    }
    catch(err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
    }
};

//Removes like from post
export const remLike = postId => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    try{
        const res = await axios.put(`/api/posts/unlike/${postId}`, config);

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: res.data }
        })
    }
    catch(err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
    }
};

//Delete post by id
export const delPost = postId => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    try{
        await axios.delete(`/api/posts/${postId}`, config)

        dispatch({
            type: DELETE_POST,
            payload: { postId }
        })
        dispatch(setAlert('Post Deleted', 'success'));
    }
    catch(err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
    }
};