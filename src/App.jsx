// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="app-container">
      <h1>Conditional Rendering Example</h1>
      <button onClick={toggleContent}>
        {showContent ? 'Hide Content' : 'Show Content'}
      </button>
      {showContent && (
        <div className="content-box">
          This content is displayed conditionally.
        </div>
      )}
    </div>
  );
}

export default App;
