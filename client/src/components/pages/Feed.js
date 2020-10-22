import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import CreatePost from '../post/CreatePost';
import Spinner from '../layout/Spinner';
import PostItem from '../post/PostItem';
import PropTypes from 'prop-types';

const Feed = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    const [showCreate, setShowCreate] = useState(false);

    return loading ? <Spinner /> : (
        <div className="container" >
            <h1 className="title-slim my-4">Posts</h1>
            <button className="btn bg-black text-white rounded-0 mb-3" onClick={() => setShowCreate(!showCreate)} >Create New Post</button>
            { showCreate && <CreatePost /> }
            { posts === null || loading ? <Spinner /> : (
                <Fragment>
                    { posts.map(post =>  <PostItem key={ post._id } post={ post } /> ) }
                </Fragment>
            ) }
        </div>
    )
}

Feed.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPosts })(Feed);
