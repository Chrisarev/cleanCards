import styles from './stylesheets/navbar2.module.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    const [username1, setUsername1] = useState('');
    const [logoutString, setlogoutString] = useState('')
    const navigate = useNavigate();

    ///sets username inside of navbar and logout if user has logged in
    useEffect(() => {
        let varr = localStorage.getItem('username');
        if (varr === null) {
            setlogoutString('')
        } else {
            setUsername1(prev => varr)
            setlogoutString(prev => 'Log Out')
        }
    }, [username1, logoutString])

    ///logs user out by deleting their session from database and removing username from 
    ///localstorage
    const logOutFunction = () => {
        localStorage.removeItem('username')
        fetch('/logout', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: ''
        }).then((response) => {
            navigate('/login')
            return response;
        })
    }

    return (
        <div className={styles.navbar}>
            <nav>
                <Link to="/">
                    <svg className={styles.logo} width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="12.5" y="11.5" width="42" height="53" rx="0.5" fill="#1313A7" stroke="white" />
                        <rect x="46.5" y="36.5" width="42" height="53" rx="0.5" fill="#1313A7" stroke="white" />
                        <path d="M78.88 76.56C78.56 76.8267 77.96 77.1867 77.08 77.64C76.2267 78.0933 75.1733 78.4933 73.92 78.84C72.6667 79.1867 71.28 79.3467 69.76 79.32C67.44 79.2667 65.36 78.8533 63.52 78.08C61.7067 77.28 60.16 76.2 58.88 74.84C57.6267 73.48 56.6667 71.92 56 70.16C55.3333 68.4 55 66.52 55 64.52C55 62.28 55.3333 60.2267 56 58.36C56.6933 56.4933 57.6667 54.88 58.92 53.52C60.2 52.16 61.72 51.1067 63.48 50.36C65.24 49.6133 67.1867 49.24 69.32 49.24C71.2933 49.24 73.04 49.5067 74.56 50.04C76.08 50.5733 77.32 51.1467 78.28 51.76L76 57.24C75.3333 56.7333 74.44 56.2133 73.32 55.68C72.2267 55.12 70.96 54.84 69.52 54.84C68.0267 54.84 66.6267 55.2533 65.32 56.08C64.04 56.9067 63 58.0267 62.2 59.44C61.4267 60.8267 61.04 62.4133 61.04 64.2C61.04 66.0933 61.4 67.76 62.12 69.2C62.84 70.6133 63.8667 71.72 65.2 72.52C66.5333 73.32 68.0933 73.72 69.88 73.72C71.4533 73.72 72.8 73.4667 73.92 72.96C75.04 72.4533 75.8933 71.92 76.48 71.36L78.88 76.56Z" fill="white" />
                        <path d="M44.88 49.56C44.56 49.8267 43.96 50.1867 43.08 50.64C42.2267 51.0933 41.1733 51.4933 39.92 51.84C38.6667 52.1867 37.28 52.3467 35.76 52.32C33.44 52.2667 31.36 51.8533 29.52 51.08C27.7067 50.28 26.16 49.2 24.88 47.84C23.6267 46.48 22.6667 44.92 22 43.16C21.3333 41.4 21 39.52 21 37.52C21 35.28 21.3333 33.2267 22 31.36C22.6933 29.4933 23.6667 27.88 24.92 26.52C26.2 25.16 27.72 24.1067 29.48 23.36C31.24 22.6133 33.1867 22.24 35.32 22.24C37.2933 22.24 39.04 22.5067 40.56 23.04C42.08 23.5733 43.32 24.1467 44.28 24.76L42 30.24C41.3333 29.7333 40.44 29.2133 39.32 28.68C38.2267 28.12 36.96 27.84 35.52 27.84C34.0267 27.84 32.6267 28.2533 31.32 29.08C30.04 29.9067 29 31.0267 28.2 32.44C27.4267 33.8267 27.04 35.4133 27.04 37.2C27.04 39.0933 27.4 40.76 28.12 42.2C28.84 43.6133 29.8667 44.72 31.2 45.52C32.5333 46.32 34.0933 46.72 35.88 46.72C37.4533 46.72 38.8 46.4667 39.92 45.96C41.04 45.4533 41.8933 44.92 42.48 44.36L44.88 49.56Z" fill="white" />
                    </svg>
                </Link>
                <div className={styles.flexContainer}>
                    <Link className={styles.userName} to="/userDash">{username1}</Link>
                    <Link className={styles.logOut} onClick={logOutFunction}>{logoutString}</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
