import styles from './stylesheets/Signup.module.css'
import Navbar from './Navbar2';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isPending, setIsPending] = useState(false);
    let navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username, password, email};
        console.log(user)
        setIsPending(true);

        fetch('/postUser', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then( ///promise needs to be resolved, response.json returns json from response only
            response => response.json()
        )
        .then((data) => { ///data is the json from response
            setIsPending(false)
            if(data.user!=null){
                localStorage.setItem('username', data.user)
            }
            console.log(data.redirectURL)
            navigate(data.redirectURL)
        })
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
                        maxLength={64}
                        value={email}
                        placeholder="name@email.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Username:</label>
                    <input
                        type="text"
                        required
                        minLength={6}
                        maxLength={20}
                        pattern="[a-zA-Z0-9-]+"
                        value={username}
                        placeholder="6-20 letters long"
                        onChange={(e) => setUsername(e.target.value.replace(/[^a-zA-Z\d]/ig, ""))}
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        required
                        minLength={6}
                        maxLength={20}
                        pattern="[a-zA-Z0-9-]+"
                        placeholder='6-20 letters long'
                        value={password}
                        onChange={(e) => setPassword(e.target.value.replace(/[^a-zA-Z\d]/ig, ""))}
                    />
                    {!isPending && <button>Sign Up</button>}
                    {isPending && <button disabled>Creating..</button>}
                </div>
            </form>
        </>
    );
}

export default Signup;