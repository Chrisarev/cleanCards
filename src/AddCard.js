import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar2";
import styles from "./stylesheets/addCard.module.css"
const AddCard = () => {
    const { deckID } = useParams();

    return ( 
        <>
        <div>{deckID}</div>
        <div className={styles.cardPanel}>
            <form action="">
            <div className={styles.card}>
                <h1>FrontSide</h1>
                <input type="file" name="image"></input>
            </div>
            <div className={styles.card}>
                <h1>BackSide</h1>
            </div>
            </form>
        </div>
        </>
     );
}

export default AddCard;