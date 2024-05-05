import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './App.css';

function PostList({ posts, setPosts }) {

    const deletePost = (id) => {
        const updatedPosts = posts.filter(post => post.id !== id);
        setPosts(updatedPosts);
    };

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                    <Link to={`/edit/${post.id}`}>Edit</Link>
                </div>
            ))}
            <Link to="/create">Create New Post</Link>
        </div>
    );
}


export default PostList;
