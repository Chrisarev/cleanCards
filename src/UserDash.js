import styles from './stylesheets/UserDash.module.css'
import '../src/stylesheets/deckStyles.css'
import Navbar2 from './Navbar2.js'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
/*import DeckContext from './DeckContext';
import { useContext } from 'react';*/

const UserDash = () => {
    const navigate = useNavigate();
    const [showAddDeck, setShowAddDeck] = useState(false);
    const [deleteMode, setDeleteMode] = useState(false);
    const [deckTitle, setDeckTitle] = useState('')
    const [deckDesc, setDeckDesc] = useState('')
    const [deckStyle, setDeckStyle] = useState('')
    const [isPending, setIsPending] = useState(false);
    const [decks, setDecks] = useState([])
    /*const {currDeck, setCurrDeck} = useContext(DeckContext);*/

    ///Checks to see if user is authenticated
    useEffect(() => {
        fetch('/isAuth', {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            if (!(response.status == 204)) {
                navigate('/login')
                return response;
            }
            return response;
        })
        getUserDecks();
    }, [])

    ///Gets decks created by user from backend as json
    ///might need delay before rendering from decks state
    const getUserDecks = async () => {
        fetch('/getDecks', {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            return response.json()
        }).then((data) => {
            setDecks(prev => data)
        })
    }

    ///Sets showAddDeck state to true so addDeckPanel is visible
    const handleAddDeck = (e) => {
        setShowAddDeck(true);

    }
    ///Sets showAddDeck state to false so addDeckPanel is NOT visible
    const hideAddDeckPanel = (e) => {
        setShowAddDeck(false);
    }
    ///stops propagation so addDeckPanel doesnt disappear when addDeckCard or inputs are clicked
    const childClick = (e) => {
        e.stopPropagation();
    }

    ///addDeckPanel (only visible when showAddDeck state is set to true)
    function addDeckPopUp(props) {
        return (
            <div id="addDeckPanel" className={styles.addDeckPanel} onClick={hideAddDeckPanel}>
                <div className={styles.addDeckCard} onClick={childClick}>
                    <form onSubmit={handleDeckSubmit}>
                        <label htmlFor="titleInput">Add Deck Title</label>
                        <input id="titleInput"
                            type="text"
                            value={deckTitle}
                            onChange={(e) => setDeckTitle(e.target.value)}
                            required
                        />
                        <label htmlFor="descInput">Add Description</label>
                        <input id="descInput"
                            type="text"
                            value={deckDesc}
                            onChange={(e) => setDeckDesc(e.target.value)}
                        />
                        <label htmlFor="styleSelector">Select Deck Style</label>
                        <select name="deck[deckStyle]" required onChange={(e) => setDeckStyle(e.target.value)}>
                            <option value={deckStyle}>Select Style</option>
                            <option value="classic">Classic</option>
                            <option value="frostedGlass">Frosted Glass</option>
                            <option value="gradient">Gradient</option>
                            <option value="dark">Dark</option>
                        </select>
                        <button type="submit">Create Deck</button>
                    </form>
                </div>
            </div>
        );
    }

    ///handles adding deck to database 
    const handleDeckSubmit = (e) => {
        e.preventDefault();
        const deck = { deckTitle, deckDesc, deckStyle };
        console.log(deck);
        setIsPending(true);
        fetch('/addDeck', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(deck)
        }).then((response) => {
            console.log(response);
            setIsPending(false);
            setDeckDesc('')
            setDeckStyle('')
            setDeckTitle('')
            setShowAddDeck(false)
            return response.json();
        }).then((data) => {
            console.log(data);
            let newArr = decks.slice();
            newArr.push(data)
            setDecks(newArr);
        })
    }
    const handleDeleteMode = (e) => {
        if (deleteMode === false) {
            setDeleteMode(true);
        } else if (deleteMode === true) {
            setDeleteMode(false);
        }
    }

    const handleDeckDelete = (deckID) => {
        console.log(deckID)
        fetch(`deleteDeck/${deckID}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            if (response.status === 204) {
                ///set decks state to be an array of all deck objects who's _id do not match deleted deckID
                setDecks(prev => prev.filter((deck) => deck._id !== deckID))
            }
            return response;
        })
    }

    return (
        <>
            <Navbar2 />
            {showAddDeck && (
                addDeckPopUp()
            )}
            <div className={styles.dash}>
                <div className={styles.actionPanel}>
                    <button className="addButton" onClick={handleAddDeck}>Add a deck</button>
                    {!deleteMode && (
                        <button className="deleteButton" onClick={handleDeleteMode}>Delete a deck</button>
                    )}
                    {deleteMode && (
                        <button className="stopDeleteButton" onClick={handleDeleteMode}>Stop Delete</button>
                    )}
                </div>
                <div className={styles.deckHolder}>
                    {decks.length===0 && 
                        <div className={styles.noDeckMessage}>You have no decks!</div> 
                    }
                    {decks.map((deck) => (
                        <div className={styles.deck + ' ' + deck.deckStyle} key={deck._id}>
                            <div className={styles.deckTitle}>{deck.deckTitle}</div>
                            <p className={styles.deckDesc}>{deck.deckDesc}</p>
                            <div className={styles.deckCardCount}>Card Count:{deck.cardCount}</div>
                            <Link to={`/deck/edit/${deck.deckStyle}/${deck._id}`}>
                                <button>Edit Deck</button>
                            </Link>
                            <Link to={`/deck/${deck.deckStyle}/${deck._id}`}>
                                <button>Use Deck</button>
                            </Link>
                            {deleteMode && (
                                <button className={styles.deleteButton} onClick={() => handleDeckDelete(deck._id)}>Delete</button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default UserDash;