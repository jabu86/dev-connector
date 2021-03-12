import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfiles} from '../../actions/profile';
import ProfileItem from './ProfileItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

const Profiles = ({
    getProfiles,
    profile: { profiles, loading }
}) => {
   
    useEffect(() => {
        getProfiles();
    }, []);
    
    return <Fragment>
        {loading ? <Spinner /> : <Fragment>
            <h1 className="large text-primary">Developers</h1> 
            <p className="load">
                <FontAwesomeIcon icon={ faSquare}/>
                <i className="fab fa-connectdevlop"></i> Browse and connect with developers
            </p>
            <div className="profiles">
                {profiles.length > 0 ? (
                    profiles.map(profile => (
                        <ProfileItem key={profile._id} profile={profile}/>
                    ))
                ) : <h4>NO PROFILES FOUND</h4>}
            </div>
        </Fragment>}
    </Fragment>
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
    profile: state.profile
});


export default connect(mapStateToProps, {getProfiles})(Profiles);
