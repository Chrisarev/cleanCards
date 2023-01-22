import styles from './stylesheets/Login.module.css'
import Navbar from './Navbar2';
import { userNavigate } from 'react-router-dom';
import { useState } from "react";


const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username, password};
        console.log(user)
        setIsPending(true);

        fetch('/login', {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        }).then(() => {
            setIsPending(false);
        }).then(response => response.json())
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
                    {!isPending && <button>Sign Up</button>}
                    {isPending && <button disabled>Creating..</button>}
                </div>
            </form>
        </>
    );
}
 
export default LogIn;