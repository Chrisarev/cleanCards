import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UseDeck = (props) => {
    /*const location = useLocation();
    const deckId = location.pathname;
    console.log(deckId);*/
    /*const {currDeck, setCurrDeck} = useContext(DeckContext);
    console.log(currDeck); */
    const {deckID} = useParams(); 
    useEffect(() =>{
        fetch(`/getCards/${deckID}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        }).then((response) => {
            return response.json()
        }).then((data) =>{
            console.log(data); 
        })
    },[])


    return (
        <div>{deckID}</div>
    );
}

export default UseDeck;