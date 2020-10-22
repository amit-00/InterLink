import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import PropTypes from 'prop-types';

import '../comp-css/create-post.css';

const CreatePost = ({ addPost }) => {
    const [text, setText] = useState('');

    const onSubmit = e => {
        console.log(text)
        addPost({ text });
    };

    return (
        <div className="container">
            <div className="card post-card rounded-0 p-4 shadow">
                <h1 className="heading">Make a Post</h1>
                <form className="form" onSubmit={e => onSubmit(e)} >
                    <div className="form-group mb-3">
                        <textarea 
                        cols="30" 
                        rows="5" 
                        className="form-control rounded-0" 
                        placeholder="Your post..." 
                        value={text} 
                        onChange={e => setText(e.target.value)}
                        required></textarea>
                    </div>
                    <input type="submit" className="btn btn-primary rounded-0 float-right" value="Create" />
                </form>
            </div>
        </div>
    )
}

CreatePost.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(CreatePost);
