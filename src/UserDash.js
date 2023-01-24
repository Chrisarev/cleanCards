import styles from './stylesheets/UserDash.module.css'
import { useContext } from 'react';
import { UserContext } from './UserContext';

const UserDash = () => {
    const {userInfo,setUserInfo} = useContext(UserContext); 
    console.log("WE REACHED UTI")
    return (  
        <>
        <div className={styles.dashDiv}>USER DASH</div>
        <div className={styles.dashDiv}>{userInfo}</div>
        </>
    );
}
 
export default UserDash;