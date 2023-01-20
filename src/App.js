import logo from './logo.svg';
import './App.css';
import LogIn from './LogIn'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useEffect, useState} from 'react'; 

function App() {

  const [backEndData, setBackEndData] = useState([{}]);

      fetch("/api").then( ///fetch data from localhost:5000/api (relative path because of proxy set in package.json)
          response => response.json()
      ).then(
          data => { ///use set state method to set backEndData
              setBackEndData(data); 
          }
      )

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
