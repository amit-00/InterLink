import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getRepos } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Repos = ({ username, getRepos, profile: { repos } }) => {
    useEffect(() => {
        getRepos(username);
    }, [getRepos, username]);

    return (
        <Fragment>
            {repos === null ? <Spinner /> : (
                <div className="repos-list" >
                    { repos.slice(0, 5).map(repo => <a href={repo.html_url} key={ repo.id } className="repo-item card rounded-0 mb-3 p-3 bg-light">
                                                        <h5 className="title-slim" >{ repo.name }</h5>
                                                        <p className="title-slim text-secondary mb-1">Description: { repo.description }</p>
                                                    </a>) }
                </div>
            )}
        </Fragment>
    )
    
    
}

Repos.propTypes = {
    profile: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    getRepos: PropTypes.func.isRequired
}

const mapStatetoProps = state => ({
    profile: state.profile
});

export default connect(mapStatetoProps, { getRepos })(Repos);
