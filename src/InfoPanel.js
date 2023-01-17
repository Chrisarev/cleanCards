import styles from './stylesheets/InfoPanel.module.css'

const InfoPanel = () => {
    return ( 
        <div className={styles.panel}>
            <h1>CleanCards</h1>
            <h2>Simple and easily customizable flashcards made to improve your learning experience.</h2>
            <button>Get Started</button>
        </div>
     );
}

export default InfoPanel;