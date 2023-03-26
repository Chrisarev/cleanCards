import styles from './stylesheets/infoPanel.module.css'
import {Link} from 'react-router-dom'; 
import {useNavigate} from 'react-router-dom';

const InfoPanel = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      navigate('signup');
    }
    
    ///if user is logged in already when they press sign up button, they will be 
    ///navigated to their userDash, otherwise they will go to signup page
    const signUpFunction = () =>{
      fetch('/login', {
        method:'GET', 
        headers: {"Content-Type":"application/json"},
    }).then((response) =>{
        if(response.status==401) {
            navigate('/signup')
            return response
        }else{
            navigate('/userDash')
        }
        return response
    })
    }

    ///if user is logged in already when they press log in button, they will be 
    ///navigated to their userDash, otherwise they will go to login page
    const logInFunction = () =>{
      fetch('/login', {
        method:'GET', 
        headers: {"Content-Type":"application/json"},
    }).then((response) =>{
        if(response.status==401) {
            navigate('/login')
            return response
        }else{
            navigate('/userDash')
        }
        return response
    })
    }

    return ( 
        <div className={styles.panel}>
            <h1 className={styles.header}>CleanCards</h1>
            <h2 className={styles.subHeader}>Simple and easily customizable flashcards made to improve your learning experience.</h2>
            <button className={styles.infoButton} onClick={signUpFunction}>Get Started</button>
            <h3>Already have an account? <Link onClick={logInFunction}>Sign In</Link></h3>
        </div>
     );
}

export default InfoPanel;