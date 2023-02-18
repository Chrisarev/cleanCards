import styles from './stylesheets/deckSection.module.css'

const DeckSection = () => {
    return (  
        <div className={styles.panel}>
            <div className={styles.textSection}>
                <h1 className={styles.deckHeader}>Create and save multiple decks for different topics!</h1>
                <h2 className={styles.deckSubHeader}>No matter what the subject, we've got you covered.</h2>
            </div>
            <div className={styles.imageSection}>
                <img></img>
            </div>
        </div>
    );
}
 
export default DeckSection;