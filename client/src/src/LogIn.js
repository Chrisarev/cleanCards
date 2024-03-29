import styles from './stylesheets/Login.module.css'
import Navbar from './Navbar2';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    let navigate = useNavigate(); 
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username, password};
        console.log(user)
        setIsPending(true);

        ///logs user in, 401 response from server means invalid credentials so they must try again
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
            return response.json()
        })
        .then((data) => {
            ///if user logs in successfully navigate to userDash and set their username in localstorage
            if(data.user){
                navigate('/userDash')
                localStorage.setItem('username',data.user.username);
            }
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
                        minLength={6}
                        maxLength={20}
                        pattern="[a-zA-Z0-9-]+"
                        value={username}
                        onChange={(e) => setUsername(e.target.value.replace(/[^a-zA-Z\d]/ig, ""))}
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        required
                        minLength={6}
                        maxLength={20}
                        pattern="[a-zA-Z0-9-]+"
                        value={password}
                        onChange={(e) => setPassword(e.target.value.replace(/[^a-zA-Z\d]/ig, ""))}
                    />
                    {!isPending && <button>Sign In</button>}
                    {isPending && <button disabled>Logging in..</button>}
                </div>
            </form>
        </>
    );
}
 
export default LogIn;