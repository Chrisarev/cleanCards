import styles from './stylesheets/infoPanel.module.css'
import {Link} from 'react-router-dom'; 
import {useNavigate} from 'react-router-dom';

const InfoPanel = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      navigate('signup');
    }
    
    return ( 
        <div className={styles.panel}>
            <h1 className={styles.header}>CleanCards</h1>
            <h2 className={styles.subHeader}>Simple and easily customizable flashcards made to improve your learning experience.</h2>
            <button className={styles.infoButton} onClick={routeChange}>Get Started</button>
            <h3>Already have an account? <Link to='/login'>Sign In</Link></h3>
        </div>
     );
}

export default InfoPanel;