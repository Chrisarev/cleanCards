import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from './Navbar2'
import styles from './stylesheets/useDeck2.module.css'
import { Transition } from 'react-transition-group'

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
    const [visitedCards, setVisitedCards] = useState([])

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
        setRevealedState(true)
    }

    const handleNextCard = () => {
        setVisitedCards(visitedCards => [...visitedCards, currCardIndex])
        console.log(visitedCards)
        setRevealedState(false)
        let index = Math.floor(Math.random() * cards.length);
        if (visitedCards.length === cards.length) {
            setCompletedState(true); 
            console.log('completed');
        } else {
            while (visitedCards.includes(index)) {
                index = Math.floor(Math.random() * cards.length);
            }
        }
        setCurrCardIndex(index)
        console.log(cards.length)
        console.log('currCard:' + currCardIndex)
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
                            <button onClick={handleReveal} className={styles.revealButton}>Reveal</button>

                        </div>
                    </div>
                    <div className={styles.buttonHolder}>
                        <button onClick={handleNextCard} className={styles.nextButton}>Next Card</button>
                    </div>
                </div>
            }
        </>
    );
}

export default UseDeck2;