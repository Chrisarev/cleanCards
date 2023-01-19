import styles from './stylesheets/cardSection.module.css'

const CardSection = () => {
    return (
        <div className={styles.cardHolder}>
            <div className={styles.card}>
              <img src="" alt=""/>
              <div className={styles.cardTitle}>Add custom images</div>
              <div className={styles.cardBody}>
                Visual models, diagrams, charts, and many more can be added to flashcards for visual learners!
              </div>
              <button className={styles.cardButton}>See examples</button>
            </div>
            <div className={styles.card}>
              <img src="" alt=""></img>
              <div className={styles.cardTitle}>Personalize your cards</div>
              <div className={styles.cardBody}>
                Customize the visual style of your cards by choosing the right theme for your study session.
              </div>
              <button className={styles.cardButton}>Explore themes</button>
            </div>
            <div className={styles.card}>
               <img src="" alt=""></img>
               <div className={styles.cardTitle}></div>
               <div className={styles.cardBody}></div>
               <button className={styles.cardButton}>Explore themes</button>
            </div>
        </div>
      );
}

export default CardSection;