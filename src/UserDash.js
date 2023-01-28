import styles from './stylesheets/UserDash.module.css'
import Navbar2 from './Navbar2.js'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const UserDash = () => {
    const navigate = useNavigate(); 
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

    return (  
        <>
        <Navbar2 />
        <div className={styles.dash}>
            <div className={styles.actionPanel}>
                <div>Add a deck</div>
                <div>Delete a deck</div>

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