import styles from './stylesheets/Signup.module.css'
import {userNavigate} from 'react-router-dom';
import {useState} from "react"; 

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
    const [isPending, setIsPending] = useState(false); 

    const handleSubmit = (e) =>{
        e.preventDefault(); 
        const user = {username, password}; 
        console.log(user)
        setIsPending(true); 

        fetch('/postUser', {
            method:'POST', 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(user)
        }).then(() =>{
            setIsPending(false);
        }).then(response => response.json())
    }

    return(
    <form onSubmit={handleSubmit}>
    <label>Name:</label>
    <input 
        type="text" 
        required 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
    />
    <label>Password:</label>
    <input 
        type="text"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    { !isPending && <button>Create Account</button>}
    { isPending && <button disabled>Creating..</button>}    
    </form>
    );
}
 
export default Signup;