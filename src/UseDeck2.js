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
    const { deckID } = useParams();
    const [cards, setCards] = useState([])

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

    return (
        <>
            <Navbar />
            <div className={styles.panel}>
                <div className={styles.cardHolder}>

                </div>
            </div>
        </>
    );
}

export default UseDeck2;