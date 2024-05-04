// components/BlogPostForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function BlogPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    // Function to submit post to local storage or API
    history.push('/');
  };

  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={e => setContent(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BlogPostForm;
