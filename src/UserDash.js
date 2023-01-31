import styles from './stylesheets/UserDash.module.css'
import Navbar2 from './Navbar2.js'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const UserDash = () => {
    const navigate = useNavigate();
    const [showAddDeck, setShowAddDeck] = useState(false);
    const [deckTitle, setDeckTitle] = useState('')
    const [deckDesc, setDeckDesc] = useState('')
    const [deckStyle, setDeckStyle] = useState('')
    const [isPending, setIsPending] = useState(false);
    const [decks, setDecks] = useState({})

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

    ///might need delay before rendering from decks state
    const getUserDecks = async () =>{
        fetch('/getDecks', {
            method:'GET',
            headers: {"Content-Type":"application/json"}
        }).then((response) =>{
            return response.json()
        }).then((data) =>{
            setDecks(prev =>data)
        })
    }

    const handleAddDeck = (e) => {
        setShowAddDeck(true);
    }

    const hideAddDeckPanel = (e) => {
        setShowAddDeck(false);
    }

    const childClick = (e) => {
        e.stopPropagation();
    }

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
                            <option value="1">Classic</option>
                            <option value="2">Frosted Glass</option>
                            <option value="3">Gradient</option>
                            <option value="4">Dark</option>
                        </select>
                        <button type="submit">Create Deck</button>
                    </form>
                </div>
            </div>
        );
    }

    const handleDeckSubmit = (e) => {
        e.preventDefault();
        const deck = {deckTitle, deckDesc, deckStyle};
        console.log(deck); 
        setIsPending(true);
         fetch('/addDeck', {
             method:'POST',
             headers:{"Content-Type":"application/json"},
             body:JSON.stringify(deck)
         }).then((response) =>{
             console.log(response);
             setIsPending(false);
             return response;
         })
    }
    const consoleLogger = (e) =>{
        console.log(decks); 
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
                    <button className="deleteButton">Delete a deck</button>
                </div>
                <div className={styles.deckHolder}>
                    <div className={styles.deck}>
                        <div className={styles.deckTitle}>Organic Chemsitry</div>
                        <p className={styles.deckDesc}>Deck made for college organic chemistry class (includes diagrams and images)</p>
                    </div>
                    <div className={styles.deck}></div>
                    <div className={styles.deck}></div>
                </div>
            </div>
        </>
    );
}

export default UserDash;