import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, remLike, delPost } from '../../actions/post';
import CreateComment from './CreateComment';
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';

const Post = ({ post: { post }, addLike, remLike, delPost }) => {
    return (
        <div>
            <Link to='/feed' className="btn bg-black rounded-0 text-white mt-5">Go Back</Link>
            <div className="rounded-0 p-3 card my-3" >
                <div className="d-flex">
                    <div className="mr-4" >
                        <img style={{ width: '60px' }} className="d-inline" src={ post.avatar } alt=""/>
                    </div>
                    <div>
                        <h5 className="title-slim">{ post.name }</h5>
                        <p className="title-slim text-secondary"><Moment format='YYYY/MM/DD' >{ post.date }</Moment></p>
                    </div>
                    
                </div>
                <hr/>
                <p  className="title-slim">{ post.text }</p>
                <div className="d-flex justify-content-end">
                    <div className="d-flex align-items-center mr-5">
                        <div onClick={() => addLike(post._id)} className="mr-3" style={{ cursor: 'pointer' }} ><i className="fas fa-thumbs-up"></i> { post.likes.length }</div>
                        <div onClick={() => remLike(post._id)} className="mr-3" style={{ cursor: 'pointer' }} ><i className="fas fa-thumbs-down"></i></div>
                        <p className="title-slim text-secondary mb-0">Comments: { post.comments.length }</p>
                    </div>
                    <div>
                        { !auth.loading && auth.user._id === post.user && <button onClick={() => delPost(post._id)} className="btn btn-danger rounded-0 ml-3">Delete Post</button> }
                    </div>
                </div>
            </div>
            <CreateComment />
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

export default connect(mapStateToProps, { addLike, remLike, delPost })(Post);
