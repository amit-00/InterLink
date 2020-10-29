import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const Comment = ({ comment: { user, text, name, avatar, date } }) => {
    return (
        <div className="rounded-0 p-3 card my-3" >
            <div className="d-flex">
                <div className="mr-4" >
                    <img style={{ width: '60px' }} className="d-inline" src={ avatar } alt=""/>
                </div>
                <div>
                    <h5 className="title-slim">{ name }</h5>
                    <p className="title-slim text-secondary"><Moment format='YYYY/MM/DD' >{ date }</Moment></p>
                </div>
                
            </div>
            <hr/>
            <p  className="title-slim">{ text }</p>
            { !auth.loading && auth.user._id === user && <button className="btn btn-danger rounded-0 ml-3 float-right">Delete Post</button> }
        </div>
    )
}

Comment.propTypes = {

}

export default connecnt(null, {  })(Comment);
