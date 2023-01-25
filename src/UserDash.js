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
        <div className={styles.dashDiv}>USER DASH</div>
        <div className={styles.dashDiv}>{userInfo}</div>
        </>
    );
}
 
export default UserDash;