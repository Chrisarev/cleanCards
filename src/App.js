import logo from './logo.svg';
import './App.css';
import LogIn from './LogIn'
import Home from './Home'
import ExpressReact from './ExpressReact';
import Signup from './Signup'
import UserDash from './UserDash';
import { useEffect, useState } from "react";
import { UserContext } from './UserContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [userInfo, setUserInfo] = useState('default'); 
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<UserContext.Provider value={{userInfo,setUserInfo}}><Home /></UserContext.Provider>}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route path="login" element={<UserContext.Provider value={{userInfo,setUserInfo}}><LogIn /></UserContext.Provider>}></Route>
            <Route path="testAPI" element={<ExpressReact />}></Route>
            <Route path="userDash" element={<UserContext.Provider value={{userInfo,setUserInfo}}><UserDash /></UserContext.Provider>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
