import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Navbar from "./Navbar2";
import styles from "./stylesheets/addCard.module.css"

const AddCard = () => {
    const { deckID } = useParams();
    const [firstImage, setFirstImage] = useState(''); 
    const [secondImage, setSecondImage] = useState('')
    
    ///allows preview of image when user selects one(before upload)
    const fileOnChange = (event) => {
        const file = event.target.files[0];
        if(file) {
            if(event.target.id==='firstImageInput'){
                setFirstImage(URL.createObjectURL(file));
            }else if(event.target.id==='secondImageInput'){
                setSecondImage(URL.createObjectURL(file));
            }
        }
        console.log(event.target.id); 
    };

    return (
        <>
        <div>{deckID}</div>
        <div className={styles.cardPanel}>
            <form action="">
            <div className={styles.card}>
                <h1>FrontSide</h1>
                <img src={firstImage} alt="" />
                <input type="file" name="firstImage" onChange={fileOnChange} id="firstImageInput"></input>
            </div>
            <div className={styles.card}>
                <h1>BackSide</h1>
                <img src={secondImage} alt="" />
                <input type="file" name="secondImage" onChange={fileOnChange} id="secondImageInput"></input>

            </div>
            </form>
        </div>
        </>
     );
}

export default AddCard;