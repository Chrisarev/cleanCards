import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar2";
import styles from "./stylesheets/addCard.module.css"
import axios from "axios";

const AddCard = () => {
    const navigate = useNavigate();
    const { deckID } = useParams();
    const [firstImagePreview, setFirstImagePreview] = useState('');
    const [secondImagePreview, setSecondImagePreview] = useState('')
    const [firstImage, setFirstImage] = useState('');
    const [secondImage, setSecondImage] = useState('');
    const [frontSideBody, setFrontSideBody] = useState('');
    const [backSideBody, setBackSideBody] = useState('')
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false); 

    ///allows preview of image when user selects one(before upload)
    const fileOnChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (event.target.id === 'firstImageInput') {
                setFirstImage(file)
                setFirstImagePreview(URL.createObjectURL(file));
            } else if (event.target.id === 'secondImageInput') {
                setSecondImage(file)
                setSecondImagePreview(URL.createObjectURL(file));
            }
        }
    };

    const handleCardSubmit = (e) => {
        e.preventDefault();
        setIsPending(true); 
        const cardData = { firstImage, secondImage, frontSideBody, backSideBody };
        const FD = new FormData();
        FD.append('firstImage', firstImage)
        FD.append('secondImage', secondImage)
        FD.append('frontSideBody', frontSideBody)
        FD.append('backSideBody', backSideBody)
        axios.post(`/addCard/${deckID}`, FD).then((response) => {
            if (!(response.status == 204)) {
                setFirstImage('')
                setFirstImagePreview('')
                setSecondImage('')
                setSecondImagePreview('')
                setFrontSideBody('')
                setBackSideBody('')
                setShowError(true)
                setIsPending(false)
                return response;
            } else if (response.status == 204) {
                renderSuccessComponent()
                setFirstImage('')
                setFirstImagePreview('')
                setSecondImage('')
                setSecondImagePreview('')
                setFrontSideBody('')
                setBackSideBody('')
                setShowSuccess(true)
                setIsPending(false)
            }
            return response;
        })
    }

    const renderSuccessComponent = () => {
        setShowSuccess(true);
        setTimeout(function () {
            setShowSuccess(false);
        }, 3000);
    }

    return (
        <>
            <div>{deckID}</div>
            {showSuccess === true && (
                <div className={styles.successMSG}>Card added to deck!</div>
            )}
            <div className={styles.cardPanel}>
                <form onSubmit={handleCardSubmit}>
                    <div className={styles.card}>
                        <h1>FrontSide</h1>
                        <img src={firstImagePreview} alt="" />
                        <input type="file" name="image[firstImage]" onChange={fileOnChange} id="firstImageInput"></input>
                        <textarea id="frontsideBody"
                            name="frontsideBody"
                            value={frontSideBody}
                            onChange={(e) => setFrontSideBody(e.target.value)}>
                        </textarea>
                    </div>
                    <div className={styles.card}>
                        <h1>BackSide</h1>
                        <img src={secondImagePreview} alt="" />
                        <input type="file" name="image[secondImage]" onChange={fileOnChange} id="secondImageInput"></input>
                        <textarea id="backsideBody"
                            name="backsideBody"
                            value={backSideBody}
                            onChange={(e) => setBackSideBody(e.target.value)}>
                        </textarea>
                    </div>
                    {!isPending && <button type="submit">Submit</button>}
                    {isPending && <button disabled>Adding Card..</button>}
                </form>
            </div>
        </>
    );
}

export default AddCard;