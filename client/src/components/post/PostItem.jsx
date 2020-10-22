import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PostItem = ({ post, auth }) => {
    return (
        <div className="rounded-0 p-4 card" >
            <h3 className="title-slim">{ post.name }</h3>
            <h5 className="title-slim text-secondary"><Moment format='YYYY/MM/DD' >{ post.date }</Moment></h5>
            <hr/>
            <h4 className="title-slim">{ post.text }</h4>
            <div>
                { !auth.loading && auth.user._id === post.user && <button className="btn btn-danger rounded-0 float-right">Delete Post</button> }
            </div>
        </div>
    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {  })(PostItem);
