import styles from './stylesheets/Login.module.css'
import Navbar from './Navbar2';
import { userNavigate } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContext';

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    //const user = useContext(UserContext)
    const {userInfo, setUserInfo} = useContext(UserContext)
    
    let navigate = useNavigate(); 

    console.log(userInfo)

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username, password};
        console.log(user)
        setIsPending(true);

        fetch('/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then((response) => {
            console.log(response)
            setIsPending(false)
            if(response.status==401){
                setUsername('')
                setPassword('')
                navigate('/login')
                return response
            }
            navigate('/userDash')
            return response.json()
        })
        .then((data) => { ///data is the json from response
            console.log(data.user.username);
            setUserInfo(data.user.username);
            //navigate(data.redirectURL)
        })
    }
    
    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div className={styles.formCard}>
                    <h1>Log In!</h1>
                    <label>Username:</label>
                    <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {!isPending && <button>Sign In</button>}
                    {isPending && <button disabled>Creating..</button>}
                </div>
            </form>
        </>
    );
}
 
export default LogIn;