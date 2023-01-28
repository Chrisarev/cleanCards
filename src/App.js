import './App.css';
import LogIn from './LogIn'
import Home from './Home'
import ExpressReact from './ExpressReact';
import Signup from './Signup'
import UserDash from './UserDash';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route path="login" element={<LogIn />}></Route>
            <Route path="testAPI" element={<ExpressReact />}></Route>
            <Route path="userDash" element={<UserDash />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
