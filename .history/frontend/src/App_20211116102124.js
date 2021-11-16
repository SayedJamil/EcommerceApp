
import './App.css';
import Center from './components/Center'
import Header from './components/Header';
import { Routes, Route, Link } from "react-router-dom";
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
