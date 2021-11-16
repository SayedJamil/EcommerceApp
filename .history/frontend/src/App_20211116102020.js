
import './App.css';
import Center from './components/Center'
import Header from './components/Header';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Home />
        } />

      </Routes>
    </div>
  );
}

export default App;
