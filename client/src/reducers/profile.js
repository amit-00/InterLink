import { GET_PROFILE, ALL_PROFILES, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE, GET_REPOS } from '../actions/types';

const initiaLState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
}

export default function ( state = initiaLState, action ) {
    const { type, payload } = action;

    switch(type){
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        
        case ALL_PROFILES:
            return {
                ...state,
                profiles: payload,
                loading: false
            }

        case GET_REPOS:
            return{
                ...state,
                repos: payload,
                loading: false
            }

        case PROFILE_ERROR:
            return {
                ...state,
                profile: null,
                loading: false,
                error: payload            }

        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                repos: [],
                loading: false
            }

        default:
            return state
    }

}