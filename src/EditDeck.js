import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from './Navbar2'
import styles from './stylesheets/editDeck.module.css'
import { Link } from "react-router-dom";
import './stylesheets/animations.css'

const EditDeck = () => {
    const { deckID, deckStyle } = useParams();
    const [cards, setCards] = useState([])
    const [flippedState, setFlippedState] = useState('')
    const [deleteMode, setDeleteMode] = useState(false)
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

    const handleDeleteMode = () => {
        if (deleteMode) {
            setDeleteMode(false)
        } else {
            setDeleteMode(true)
        }
    }

    const handleCardDelete = (cardID) => {
        fetch(`/deleteCard/${cardID}/${deckID}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
        }).then((response) => {
            if(response.status===204){
                ///set cards state to be an array of all card objects who's _id do not match deleted cardID
                setCards(prev => prev.filter((card) => card._id !== cardID))
            }
            return response
        }).then((data) => {
            
        })
    }
    
    return (
        <>
            <Navbar />
            <div className={styles.dash}>
                <div className={styles.actionPanel}>
                    <Link to={`/deck/edit/${deckStyle}/${deckID}/addCard`}>Add Card</Link>
                    <button onClick={handleDeleteMode}>Delete Card</button>
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
                            {deleteMode &&
                                <div className={styles.deleteHolder}>
                                    <button onClick={() => handleCardDelete(card._id)}>Delete</button>
                                </div>
                            }
                        </div>
                    ))}
                    {cards.length===0 &&
                        <h1 className={styles.noCardsMessage}>This deck has no cards!</h1>
                    }
                </div>
            </div>
        </>
    );
}

export default EditDeck;