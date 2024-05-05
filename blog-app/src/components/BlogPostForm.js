import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './index.css';
import './App.css';
function PostForm({ posts, setPosts }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
        const postToEdit = posts.find(post => post.id === Number(id));
        if (postToEdit) {
            setTitle(postToEdit.title);
            setContent(postToEdit.content);
        }
    }
  }, [id, posts]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      if (id) {
          // Edit post
          const updatedPosts = posts.map(post =>
              post.id === Number(id) ? { id: Number(id), title, content } : post
          );
          setPosts(updatedPosts);
      } else {
          // Add post
          const newPost = { id: posts.length + 1, title, content };
          setPosts([...posts, newPost]);
      }
      navigate('/');
    } else {
      alert('Enter title and content.');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
        <button type="submit">{id ? 'Update' : 'Submit'}</button>
    </form>
  );
}
export default PostForm;