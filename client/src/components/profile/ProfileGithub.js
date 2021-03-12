import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getGithubRepose} from '../../actions/profile';

const ProfileGithub = ({username, getGithubRepose, repos}) => {
   
    useEffect(() => {
        getGithubRepose(username);
    },[getGithubRepose]);
    return (
        <div>
            <h2>Github Repos</h2>
            {repos == null ? <Spinner /> : (
                repos.map(repo => (
                    <div key={repo._id} className="repo bg-white p-1 my-1">
                        <div>
                            <h4>
                                <a href={repo.html_url} target='_blank'
                                    rel='noopener noreferrer'>{repo.name}</a>
                            </h4>
                            <p>{ repo.description}</p>
                        </div>
                        <div>
                            <ul>
                                <li className="badge badge-primary">
                                Stars: {repos.stargazers_count}
                                </li>
                                <li className="badge badge-dark">
                                Watchers: {repos.watchers_count}
                                </li>
                                <li className="badge badge-light">
                                Forks: {repos.forks_count}
                                </li>
                            </ul>
                        </div>

                    </div>
                ))
            )}
        </div>
    )
}

ProfileGithub.propTypes = {
    getGithubRepose: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    username:PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    repos:state.profile.repos
})

export default connect(mapStateToProps, {getGithubRepose})(ProfileGithub);
