import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CreateComment = ({  }) => {
    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="card shadow">
            <h5 className="title-slim">Add Comment:</h5>
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
    )
}

CreateComment.propTypes = {

}

export default connect(null, {  })(CreateComment);
