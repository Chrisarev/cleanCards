import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from './Navbar2'
import styles from './stylesheets/editDeck.module.css'
import { Link } from "react-router-dom";
import './stylesheets/animations.css'

const EditDeck = () => {
    const { deckID,deckStyle } = useParams();
    const [cards, setCards] = useState([])
    const [flippedState, setFlippedState] = useState('')
    ///retreive all cards from deck(id in params)
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

    const deleteCard = () => {
        /** fetch POST here  */
    }
    const handleFlip = () =>{
        if(flippedState){
            setFlippedState('')
        }else{
             setFlippedState('flippedStateAni'); 
        }
    }
                    {/*<div key={card._id} className={styles.card + ' ' + deckStyle + ' ' + flippedState}>
                        <img src={card.frontSide.image} alt="" />
                        <div className={styles.cardBody}>{card.frontSide.body}</div>
                        <button className={styles.flipButton} onClick={handleFlip}>Flip</button>
                    </div>*/}
    return (
        <>
            <Navbar />
            <div className={styles.dash}>
                <div className={styles.actionPanel}>
                    <Link to={`/deck/edit/${deckStyle}/${deckID}/addCard`}>Add Card</Link>
                    <button onClick={deleteCard}>Delete Card</button>
                </div>
                {/*ADDS TOO MANY PIXELS HORIZONTALLY, CAUSES OVERFLOWX..FIND OUT WHY*/}
                <div className={styles.cardHolder}>
                {cards.map((card) => (
                    <div key={card._id} className={styles.flipCard}>
                        <div className={styles.content}>
                            <div className={styles.front}>
                                <img src={card.frontSide.image} alt="" />
                                <div className={styles.cardBody}>{card.frontSide.body}</div>
                            </div>
                            <div className={styles.back}>
                                <img src={card.backSide.image} alt="" />
                                <div className={styles.cardBody}>{card.backSide.body}</div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}

export default EditDeck;