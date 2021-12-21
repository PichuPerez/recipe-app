import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import RecipeDetail from './RecipeDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  )
}

export default App;
