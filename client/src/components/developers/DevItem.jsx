import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DevItem = ({ profile }) => {

    const { user: { _id, name, avatar }, status, location, skills } = profile;

    return (
        <Link to={`/developer/${_id}`} className="card rounded-0 p-3 dev-card" >
            <div className="row">
                <div className="col-6">
                    <img style={{ width: '100%' }} src={ avatar } alt=""/>
                </div>
                <div className="col-6">
                    <h5 className="title-slim mb-1">{ name }</h5>
                    <p className="title-slim text-primary mb-1"> { status } </p>
                    <small className="text-muted"><i className="fas fa-map-marker-alt mr-1"></i>{ location }</small>
                    <ul className="profile-skills mb-0">
                        { skills.slice(0, 4).map((skill, index) => <small key={index} className="badge bg-black text-white mr-1" >{ skill }</small>) }
                    </ul>
                </div>
            </div>
            
        </Link>
    )
}

DevItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default DevItem;
