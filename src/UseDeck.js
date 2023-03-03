import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from './Navbar2'
import styles from './stylesheets/useDeck.module.css'
import { Transition } from 'react-transition-group'

const UseDeck = (props) => {
    /*const location = useLocation();
    const deckId = location.pathname;
    console.log(deckId);*/
    /*const {currDeck, setCurrDeck} = useContext(DeckContext);
    console.log(currDeck); */
    const { deckID } = useParams();
    const [cards, setCards] = useState([])
    const [currCardIndex, setCurrCardIndex] = useState(0)
    const [flippedState, setFlippedState] = useState(false)
    let string = 'flippedCard'
    
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

    const handleFlip = () => {
        if (flippedState === false) {
            setFlippedState(true)
        } else {
            setFlippedState(false)
        }
    }

    return (
        <>
            <Navbar />
            {cards[0] &&
                <>
                        <div className={styles.flipCard}>
                            <div className={styles.content + `${flippedState ? ' flippedContent' : 'notFlipped'}`}>
                                <div className={styles.front}>
                                    <img src={cards[currCardIndex].frontSide.image} alt="" />
                                    <div className={styles.cardBody}>{cards[currCardIndex].frontSide.body}</div>
                                </div>
                                <div className={styles.back}>
                                    <img src={cards[currCardIndex].backSide.image} alt="" />
                                    <div className={styles.cardBody}>{cards[currCardIndex].backSide.body}</div>
                                </div>
                            </div>
                        </div>
                    <button onClick={handleFlip}>Flip Card</button>
                </>
            }
        </>
    );
}

export default UseDeck;