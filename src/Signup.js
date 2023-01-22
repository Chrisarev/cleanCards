import styles from './stylesheets/Signup.module.css'
import Navbar from './Navbar2';
import { userNavigate } from 'react-router-dom';
import { useState } from "react";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username, password, email};
        console.log(user)
        setIsPending(true);

        fetch('/postUser', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            setIsPending(false);
        }).then(response => response.json())
    }

    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div className={styles.formCard}>
                    <h1>Welcome!</h1>
                    <label>Email:</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
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

export default Signup;