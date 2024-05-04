// components/BlogPostList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BlogPostList() {
  const [posts, setPosts] = useState([]);

  // Function to fetch posts from local storage or API

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/new">New Post</Link>
    </div>
  );
}

export default BlogPostList;
