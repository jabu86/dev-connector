import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect, connet } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const CommentItem = ({
    postId,
    deleteComment,
    auth,
    comment: { _id, avatar, text, user, name, date },
}) => {
    
    return (
        <Fragment>
            <div className="post bg-white p-1 my-1">
                <div>
                    <Link to={`/profile/${user}`}>
                        <img className="round-img" src={avatar} alt={name} />
                        <h2>{ name}</h2>
                    </Link>
                </div>
                <div>
                    <p className="my-1">{text}</p>
                    <p className="post-date">
                        Posted on <Moment format="YYYY/MM/DD">{ date }</Moment>
                    </p>
                    <button onClick={() => deleteComment(postId, _id)} type="button" className="btn btn-danger">
                        <FontAwesomeIcon icon={ faTimes}/>
                    </button>
                </div>
            </div>
        </Fragment>
    )
        
}

CommentItem.propTypes = {
    comment: PropTypes.object.isRequired,
    
    auth: PropTypes.object.isRequired,
    deleteComment:PropTypes.func.isRequired,
}


const mapStateToProp = state => ({
    auth:state.auth
})

export default connect( mapStateToProp, {deleteComment} )(CommentItem)
