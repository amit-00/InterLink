import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from '../post/PostItem';
import PropTypes from 'prop-types';

const Feed = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return loading ? <Spinner /> : (
        <div className="container" >
            { posts === null || loading ? <Spinner /> : (
                <Fragment>
                    { posts.map(post =>  <PostItem key={ post._id } post={ post } /> ) }
                </Fragment>
            ) }
        </div>
    )
}

Feed.propTypes = {
    getPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPosts })(Feed);
