import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from './Navbar2'
import styles from './stylesheets/useDeck2.module.css'
import { Transition } from 'react-transition-group'
import { Link } from "react-router-dom";
const UseDeck2 = (props) => {
    /*const location = useLocation();
    const deckId = location.pathname;
    console.log(deckId);*/
    /*const {currDeck, setCurrDeck} = useContext(DeckContext);
    console.log(currDeck); */
    const { deckID, deckStyle } = useParams();
    const [cards, setCards] = useState([])
    const [currCardIndex, setCurrCardIndex] = useState(0);
    const [revealedState, setRevealedState] = useState(false);
    const [completedState, setCompletedState] = useState(false);
    const [visitedCards, setVisitedCards] = useState([0])

    useEffect(() => {
        fetch(`/getCards/${deckID}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        }).then((response) => {
            return response.json()
        }).then((data) => {
            setCards(data)
        })
    }, [])

    const handleReveal = () => {
        if (revealedState === true) {
            setRevealedState(false)
        } else {
            setRevealedState(true)
        }
    }

    const handleNextCard = () => {
        setVisitedCards(visitedCards => [...visitedCards, currCardIndex])
        setRevealedState(false)
        let index = Math.floor(Math.random() * cards.length);
        if (visitedCards.length === cards.length) {
            setCompletedState(true);
            setVisitedCards([0])
            setCurrCardIndex(0)
            setRevealedState(false)
            console.log('completed');
        } else {
            console.log(visitedCards.includes(index))
            while (visitedCards.includes(index)) {
                index = Math.floor(Math.random() * cards.length);
            }
        }
        setCurrCardIndex(index)
        console.log('currCard:' + currCardIndex)
    }
    const handleReuseDeck = () => {
        setVisitedCards([0])
        setCurrCardIndex(0)
        setRevealedState(false)
        setCompletedState(false)        
    }
    
    return (
        <>
            <Navbar />
            {cards[currCardIndex] &&
                <div className={styles.panel}>
                    <div className={styles.cardHolder}>
                        <div className={styles.card + ' ' + deckStyle}>
                            <img className={styles.cardImage} src={cards[currCardIndex].frontSide.image}></img>
                            <div className={styles.cardBody}>{cards[currCardIndex].frontSide.body}</div>
                        </div>
                        <div className={`${styles.card} + ${styles.backCard}`}>
                            {revealedState &&
                                <div className={`${styles.backCardInfo} + ${deckStyle}`}>
                                    <img className={styles.backCardImage} src={cards[currCardIndex].backSide.image}></img>
                                    <div className={styles.backCardBody}>
                                        {cards[currCardIndex].backSide.body}
                                    </div>
                                </div>
                            }
                            {!revealedState &&
                                <button onClick={handleReveal} className={styles.revealButton}>Reveal</button>
                            }
                        </div>
                    </div>
                    {!completedState &&
                        <div className={styles.buttonHolder}>
                            <button onClick={handleNextCard} className={styles.nextButton}>Next Card</button>
                            {revealedState &&
                                <button onClick={handleReveal} className={styles.unRevealButton}>UnReveal</button>
                            }
                        </div>
                    }
                    {completedState &&
                        <div className={styles.completedPanel}>
                            <div className={styles.completedMessage}>You've completed this deck!</div>
                            <div className={styles.completedButtonHolder}>
                                <button onClick={handleReuseDeck}>Use Deck Again</button>
                                <Link to={`/userDash`}>Use Other Deck</Link>
                            </div>
                        </div>
                    }
                </div>
            }
            {cards.length === 0 &&
                <div className={styles.noCardsPanel}>
                    <h1 className={styles.noCardsMessage}>This deck has no cards!</h1>
                    <div className={styles.noCardsButtonHolder}>
                        <Link to={`/deck/edit/${deckStyle}/${deckID}`}>Edit Deck</Link>
                        <button>Delete Deck</button>
                    </div>
                </div>
            }
        </>
    );
}

export default UseDeck2;