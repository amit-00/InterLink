import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE, DELETE_ACCOUNT, CLEAR_PROFILE } from './types';

//Get current user profile
export const getUserProfile = () => async dispatch => {
    try{
        const res = await axios.get('api/profile/me');
        
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    }
    catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });

    }
};

//Delete current user
export const deleteUser = () => async dispatch => {
    if(window.confirm('This will delete your account and cannot be undone. Proceed?')){
        try{
            const res = await axios.delete('api/profile');
            
            dispatch({ type: CLEAR_PROFILE });
            dispatch({ type: DELETE_ACCOUNT });

            dispatch(setAlert('Account Deleted', 'secondary'));
        }
        catch(err){
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.data.msg, status: err.response.status }
            });
    
        }
    }
};

//Create new profile
export const updateUserProfile = (formData, history, edit=false) => async dispatch => {

    try{
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }

        const res = await axios.post('/api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile Updated!' : 'Profile Created!', 'success'));

        history.push('/dashboard');

    }
    catch(err){
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
        
    }

};

//add Experience
export const addExperience = (formData, history) => async dispatch => {
    try{
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }

        const res = await axios.put('api/profile/experience', formData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Profile updated!', 'success'));

        history.push('/dashboard');

    }
    catch(err){
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
        
    }
};

//Remove Experience
export const delExperience = id => async dispatch => {
    try{
        const res = await axios.delete(`/api/profile/experience/${id}`);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Experience Deleted', 'warning'));
    }
    catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
    }
};

//add Education
export const addEducation = (formData, history) => async dispatch => {
    try{
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }

        const res = await axios.put('api/profile/education', formData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Profile updated!', 'success'));

        history.push('/dashboard');

    }
    catch(err){
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
        
    }
};

//Remove Education
export const delEducation = id => async dispatch => {
    try{
        const res = await axios.delete(`/api/profile/education/${id}`);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Education Deleted', 'warning'));
    }
    catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
    }
};