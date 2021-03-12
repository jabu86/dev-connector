import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const ProfileAbout = ({ profile: {
    skills,
    bio,
    user:{name}
}}) => {
    return (
        <div className="profile-about bg-light p-2">
            
            {bio && (
                <Fragment>
                    <h2 className="text-primary">{name.trim().split(' ')[0]}s</h2>
                    <p>
                        {bio}
                    </p>
                    <div className="line"></div>
                </Fragment>
            )}
            <h2 className="text-primary">Skill Set</h2>
            <div className="skills">
            {skills.map((skill, index) => (
                <div key={index} className="p-1">
                    <FontAwesomeIcon icon={faCheck}/> {skill}
                </div>
            ))}
            </div>

        </div>
    )
}

ProfileAbout.propTypes = {
    profile:PropTypes.object.isRequired,
}

export default ProfileAbout
