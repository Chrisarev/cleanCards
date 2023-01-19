import logo from './logo.svg';
import './App.css';
import LogIn from './LogIn'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="login" element={<LogIn />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
