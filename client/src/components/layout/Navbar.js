import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast, faRegistered, faSignInAlt, faSignOutAlt, faTachometerAlt, faTv } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
  
    const { isAuthenticated, loading, user} = props.auth;
    
    const authLinks = (
        <Fragment>
            <li>
                <Link to="/profiles" >
                    <FontAwesomeIcon icon={faTv} />
                    <span className='hide-sm'> Developers</span>
                </Link>
            </li>
            <li>
                <Link to="/posts" >
                    <FontAwesomeIcon icon={faPodcast} />
                    <span className='hide-sm'> Posts</span>
                </Link>
            </li>
            <li>
                <Link to="/dashboard" >
                    <FontAwesomeIcon icon={faTachometerAlt} />
                    <span className='hide-sm'> Dashboard</span>
                </Link>
            </li>
            <li>
                <a href="#" onClick={props.logout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span className="hide-sm"></span>
                Logout</a>
            </li>
        </Fragment>
    );

    const gustLinks = (
        <Fragment>
            <li><Link to="/profiles"><FontAwesomeIcon icon={faTv} /> Developers</Link></li>
            <li><Link to="/register"><FontAwesomeIcon icon={faRegistered} /> Register</Link></li>
            <li><Link to="/login"><FontAwesomeIcon icon={faSignInAlt} /> Login</Link></li>
            
        </Fragment>
    );

    return (
        <nav className="navbar bg-dark">
            <h1>
                <a href="/"><i className="fas fa-code"></i> DevConnector</a>
            </h1>
            <ul>
                { !loading && (<Fragment> {isAuthenticated ?  authLinks : gustLinks}</Fragment>) }
              
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout:PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    auth:state.auth
});

export default connect(mapStateToProps, {logout})(Navbar);