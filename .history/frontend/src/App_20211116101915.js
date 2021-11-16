
import './App.css';
import Center from './components/Center'
import Header from './components/Header';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
        <Header />
        <img src="https://images.unsplash.com/photo-1580974928064-f0aeef70895a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" class="img-fluid imageSizing" alt=" "></img>
        <Center />
      </Routes>
    </div>
  );
}

export default App;
