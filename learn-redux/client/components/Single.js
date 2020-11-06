import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";
import { Link } from "react-router";

const Single = React.createClass({
  render() {
    // get the postId from the url
    const { postId } = this.props.params;

    // we need the index of the post
    const index = this.props.posts.findIndex((post) => post.code === postId);

    // get us the post
    const post = this.props.posts[index];

    // get the comments
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  },
});

export default Single;
