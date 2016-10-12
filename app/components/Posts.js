import React, { PropTypes } from 'react';

export default class Posts extends React.Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) =>
         <li key={i}>{post.title}</li>
        )}
      </ul>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
