import React, { Fragment } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = ({ comments }) => {
    return (
        <Fragment>
            <h5 className="title-slim">Comments:</h5>
            <div className="comment-section ml-5">
                { comments.map(comment => <Comment key={ comment._id } comment={ comment } />) }
            </div>
        </Fragment>
        
    )
}

CommentSection.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommentSection;
