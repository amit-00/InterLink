import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PostItem = ({ post, auth }) => {
    return (
        <div className="card rounded-0 p-4" >
            <h3 className="title-slim">{ post.name }</h3>
            <h5 className="title-slim text-secondary">{ post.user }</h5>
            <hr/>
            <h4 className="title-slim">{ post.text }</h4>
        </div>
    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {  })(PostItem);
