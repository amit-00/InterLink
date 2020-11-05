import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import PropTypes from 'prop-types';

const CreateComment = ({ postId, addComment }) => {
    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        addComment(postId, { text });
    }

    return (
        <div className="card rounded-0 p-4 mt-1 mb-4">
            <h5 className="title-slim">Add Comment:</h5>
            <form className="form" onSubmit={e => onSubmit(e)} >
                <div className="form-group mb-3">
                    <textarea 
                    cols="30" 
                    rows="3" 
                    className="form-control rounded-0" 
                    placeholder="Your post..." 
                    value={text} 
                    onChange={e => setText(e.target.value)}
                    required></textarea>
                </div>
                <input type="submit" className="btn btn-primary rounded-0 float-right" value="Create" />
            </form>
        </div>
    )
}

CreateComment.propTypes = {
    addComment: PropTypes.func.isRequired
}

export default connect(null, { addComment })(CreateComment);
