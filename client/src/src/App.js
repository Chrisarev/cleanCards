import './App.css';
import LogIn from './LogIn'
import Home from './Home'
import Signup from './Signup'
import UserDash from './UserDash';
import EditDeck from './EditDeck';
import AddCard from './AddCard';
import UseDeck2 from './UseDeck2'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
            <Route path="userDash" element={<UserDash />}></Route>
            <Route path="/deck/:deckStyle/:deckID" element={<UseDeck2 />}></Route>
            <Route path="/deck/edit/:deckStyle/:deckID" element={<EditDeck />}></Route>
            <Route path="/deck/edit/:deckStyle/:deckID/addCard" element={<AddCard />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    </DeckContext.Provider>
  )
}

export default App;
