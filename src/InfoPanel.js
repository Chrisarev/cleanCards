import styles from './stylesheets/InfoPanel.module.css'
import {Link} from 'react-router-dom'; 

function sayHello(){
    console.log('clicked')
}
const InfoPanel = () => {
    return ( 
        <div className={styles.panel}>
            <h1>CleanCards</h1>
            <h2>Simple and easily customizable flashcards made to improve your learning experience.</h2>
            <button onClick={sayHello}>Get Started</button>
            <h3>Already have an account? <Link to={'/login'}>Sign In</Link></h3>
        </div>
     );
}

export default InfoPanel;