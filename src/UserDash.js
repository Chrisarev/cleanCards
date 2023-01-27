import styles from './stylesheets/UserDash.module.css'
import { useContext } from 'react';
import { UserContext } from './UserContext';
import Navbar2 from './Navbar2.js'
import { Link } from 'react-router-dom';

const UserDash = () => {
    const {userInfo,setUserInfo} = useContext(UserContext); 
    console.log("WE REACHED UTI")
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