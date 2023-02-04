import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from './Navbar2'

const EditDeck = () => {
    const {deckID} = useParams(); 
    const [cards, setCards] = useState([])
    
    useEffect(() => {
        fetch(`/getCards/${deckID}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        }).then((response) => {
            return response.json()
        }).then((data) =>{
             setCards(data)
        })
    },[])

    const addCard = () => {
        
    }

    return ( 
        <>
            <Navbar />
            
            <div className="dash"></div>
            {cards.map((card) => (
                <div key={card._id}>
                    {card.frontSide.body}
                </div>
            ))}
        </>
     );
}

export default EditDeck;