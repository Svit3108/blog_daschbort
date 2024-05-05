import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home';
import PostForm from './PostForm';
import PostList from './PostList';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList posts={posts} setPosts={setPosts} />} />
        <Route path="/create" element={<PostForm posts={posts} setPosts={setPosts} />} />
        <Route path="/edit/:id" element={<PostForm posts={posts} setPosts={setPosts} />} />
      </Routes>
    </Router>
  );
}
        
export default App;
