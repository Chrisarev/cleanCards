import './App.css';
import LogIn from './LogIn'
import Home from './Home'
import ExpressReact from './ExpressReact';
import Signup from './Signup'
import UserDash from './UserDash';
import UseDeck from './UseDeck';
import EditDeck from './EditDeck';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from 'react';
import DeckContext from './DeckContext'

function App() {
  const [currDeck, setCurrDeck] = useState('contextDeck')
  const value = {currDeck, setCurrDeck}

  return (
    <DeckContext.Provider value={value}>
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route path="login" element={<LogIn />}></Route>
            <Route path="testAPI" element={<ExpressReact />}></Route>
            <Route path="userDash" element={<UserDash />}></Route>
            <Route path="/deck/:deckID" element={<UseDeck />}></Route>
            <Route path="/deck/edit/:deckID" element={<EditDeck />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    </DeckContext.Provider>
  );
}

export default App;
