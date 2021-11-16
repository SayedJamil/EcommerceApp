import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from './components/Home';
import Checkout from './components/Checkout';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
