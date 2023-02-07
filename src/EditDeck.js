import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from './Navbar2'
import styles from './stylesheets/editDeck.module.css'
import { Link } from "react-router-dom";
const EditDeck = () => {
    const { deckID } = useParams();
    const [cards, setCards] = useState([])

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


    return (
        <>
            <Navbar />
            <div className={styles.dash}>
                <div className={styles.actionPanel}>
                    <Link to={`/deck/edit/${deckID}/addCard`}>Add Card</Link>
                    <button onClick={deleteCard}>Delete Card</button>
                </div>
                {/*ADDS TOO MANY PIXELS HORIZONTALLY, CAUSES OVERFLOWX..FIND OUT WHY*/}
                <div className={styles.cardHolder}>
                {cards.map((card) => (
                    <div key={card._id}>
                        {card.frontSide.body}
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}

export default EditDeck;