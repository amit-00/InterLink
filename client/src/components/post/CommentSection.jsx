import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = ({ comments }) => {
    return (
        <div className="comment-section ml-5">
            { comments.map(comment => <Comment comment={ comment } />) }
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommentSection;
