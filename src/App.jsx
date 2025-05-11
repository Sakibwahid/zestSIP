import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Green from './pages/Green';
import Orange from './pages/Orange';
import Berry from './pages/Berry';
import Strawberry from './pages/Strawberry';
import CartPage from './components/CartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/green" element={<Green />} />
        <Route path="/orange" element={<Orange />} />
        <Route path="/berry" element={<Berry />} />
        <Route path="/strawberry" element={<Strawberry />} />
        <Route
            path="/cart"
            element={
              <CartPage
                isopen={true} 
                close={() => window.history.back()} 
              />
            }
          />
      </Routes>
    </Router>
  );
}

export default App;




