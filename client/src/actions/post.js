import axios from 'axios';
import { setAlert } from './alert';
import { ADD_POST, GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST, GET_POST, CLEAR_POST, ADD_COMMENT, DEL_COMMENT } from './types';

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

//get single post
export const getPost = postId => async dispatch => {
    try{
        const res = await axios.get(`/api/posts/${postId}`);

        dispatch({ type: CLEAR_POST });
        dispatch({
            type: GET_POST,
            payload: res.data
        })
    }
    catch(err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
    }
}

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

//Add comment to post
export const addComment = (postId, formData) => async dispatch => {
    console.log(postId)
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    try{
        const res = await axios.post(`/api/posts/comment/${postId}`, formData, config);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })

        dispatch(setAlert('Comment Added', 'success'));
    }
    catch(err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
    }
};

//Delete comment to post
export const delComment = (postId, commentId) => async dispatch => {
    try{
        const res = await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

        dispatch({
            type: DEL_COMMENT,
            payload: commentId
        })

        dispatch(setAlert('Comment Deleted', 'success'));
    }
    catch(err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
    }
};