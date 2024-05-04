// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostForm from './components/BlogPostForm';
import { useHistory } from 'react-router-dom';


function App() {
    const history = useHistory();
  
    // Hier kannst du die history-Instanz verwenden, z.B.:
    // history.push('/route');
  
    return (
      <Router></Router>
      <div>
        {/* Dein Code hier */}
      </div>
    );
  
  return (
    <Router>
      <div>
        <h1>My Blog</h1>
        <Switch>
          <Route path="/" exact component={BlogPostList} />
          <Route path="/new" component={BlogPostForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
