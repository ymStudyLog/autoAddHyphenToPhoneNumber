import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Comment from './pages/Comment';
import DefaultLayout from './layout/DefaultLayout';

const App = () => {
  return (
    <DefaultLayout>
      <Home />
      <Projects />
      <Comment />
    </DefaultLayout>
  );
};

export default App;
