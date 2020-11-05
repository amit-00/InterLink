import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, remLike, delPost, getPost } from '../../actions/post';
import PostItem from './PostItem';
import CreateComment from './CreateComment';
import CommentSection from './CommentSection';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Post = ({ post: { post, loading }, match, getPost }) => {
    useEffect(() => {
        getPost(match.params.id);
    }, [getPost]);

    const [showCreate, setShowCreate] = useState(false);

    return loading || post === null ? <Spinner /> : (
        <div className="container">
            <Link to='/feed' className="btn bg-black rounded-0 text-white mt-5">Go Back</Link>
            <div className="my-3" >
                <PostItem post={ post } showActions={ false } />
                
            </div>
            <button onClick={() => setShowCreate(!showCreate)} className="btn btn-primary rounded-0 mb-3">Add Comment</button>
            { showCreate && <CreateComment postId={ post._id } /> }
            <CommentSection comments={ post.comments } />
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { addLike, remLike, delPost, getPost })(Post);
