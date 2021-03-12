import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faDove, faGlobe, faImages, faLink, faTv} from '@fortawesome/free-solid-svg-icons';

const ProfileTop = ({
    profile: {
        company,
        status,
        location,
        website,
        social,
        user:{name, avatar}
    }
}) => {
   
    return (
        <div className="profile-top bg-primary p-2">
          <img
            className="round-img my-1"
            src={avatar}
            alt={name}
          />
            <h1 className="large">{ name }</h1>
            <p className="lead">{status} {company && <span> at { company}</span>}</p>
            <p>{location && <span>{ location}</span>}</p>
            <div className="icons my-1">
                {
                    website && (
                         <a href={website} target="_blank" rel="noopener noreferrer">
                            
                            <FontAwesomeIcon icon={ faGlobe}/>
                        </a>
                    )
                }
             
                {social && social.twitter && (
                    <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={ faDove} />
                    </a>
                )}
                {social && social.facebook && (
                     <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                        
                        <FontAwesomeIcon icon={ faBook } />
                    </a>
                )}
                {social && social.linkedin && (
                     <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin fa-2x"></i>
                        <FontAwesomeIcon icon={ faLink } />
                    </a>
                )}
                {social && social.youtube && (
                    <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube fa-2x"></i>
                        <FontAwesomeIcon icon={ faTv } />
                    </a>
                )}
                {social && social.instagram && (
                    <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram fa-2x"></i>
                        <FontAwesomeIcon icon={ faImages } />
                    </a>
                )}
            
          </div>
        </div>
    )
}

ProfileTop.propTypes = {
   profile:PropTypes.object.isRequired,
}

export default ProfileTop
