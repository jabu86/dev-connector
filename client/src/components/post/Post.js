import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';


const Post = ({ getPost, post: { posts, loading }, match }) => {
    useEffect(() => {
        getPost(match.params.id);
    }, [getPost]);
    console.log(posts);
    return (
        <Fragment>
            {posts === null || loading ? (<Spinner />) : (
                <Fragment>
                    <Link to="/posts" className="btn btn-light">Back</Link>
                   
                    <PostItem post={posts} showActions={false} />

                      <CommentForm postId={match.params.id} />

                     <div className="comments">
                        {posts.comments === undefined ? <Spinner /> : posts.comments.map(comment => (
                            <CommentItem key={comment._id} comment={comment} postId={match.params.id} />
                        ))}
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
    /*
    return { loading || posts === null ? (<Spinner />) : (<Fragment>
        <Link to="/posts" className="btn btn-light">Back</Link>
        <PostItem post={posts} showActions={false} />
        <CommentForm post={posts} />
        <div className="comments">
            {posts.comments === undefined ? <Spinner /> : posts.comments.map(comment => (
                <CommentItem key={comment._id} comment={comment} post={posts} />
            ))}
        </div>
    </Fragment>)};
    */
    
};

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post:PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    post:state.post
})
export default connect(mapStateToProps,{getPost})(Post)
