import styles from './stylesheets/UserDash.module.css'
import Navbar2 from './Navbar2.js'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const UserDash = () => {
    const navigate = useNavigate(); 
    let showAddDeck = false;

    useEffect(() =>{
        fetch('/isAuth', {
            method:'GET', 
            headers: {"Content-Type":"application/json"}
          }).then((response) =>{
            if(!(response.status==204)){
                navigate('/login')
                return response;
            }
            return response; 
          })
    },[])

    const handleAddDeck = (e) =>{
        showAddDeck = true; 
        console.log(showAddDeck); 
    }

    function addDeckPanel(props) {
        return (
            <div>ADD DECK!!!!</div>
        );
    }

    return (  
        <>
        <Navbar2 />
        <div className={styles.dash}>
            <div className={styles.actionPanel}>
                <button className="addButton" onClick={handleAddDeck}>Add a deck</button>
                <button className="deleteButton">Delete a deck</button>
                {showAddDeck && (<div className={styles.testDIV}>ADD DECK!!!!</div>)}
            </div>
            <div className={styles.deckHolder}>
                <div className={styles.deck}>
                    <div className={styles.deckTitle}>Organic Chemsitry</div>
                    <p className={styles.deckDesc}>Deck made for college organic chemistry class (includes diagrams and images)</p>
                </div>
                <div className={styles.deck}></div>
                <div className={styles.deck}></div>
            </div>
        </div>
        </>
    );
}

export default UserDash;