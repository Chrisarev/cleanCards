import styles from './stylesheets/UserDash.module.css'
import { useContext } from 'react';
import { UserContext } from './UserContext';
import Navbar2 from './Navbar2.js'

const UserDash = () => {
    const {userInfo,setUserInfo} = useContext(UserContext); 
    console.log("WE REACHED UTI")
    return (  
        <>
        <Navbar2 />
        <div className={styles.dash}>
            <div className={styles.actionPanel}></div>
            <div className={styles.deckHolder}>
                <div className={styles.deck}></div>
                <div className={styles.deck}></div>
                <div className={styles.deck}></div>
            </div>
        </div>
        </>
    );
}

export default UserDash;