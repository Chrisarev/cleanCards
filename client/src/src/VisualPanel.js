import styles from './stylesheets/VisualPanel.module.css'

const VisualPanel = () => {
    return (
        <div className={styles.panel}>
            <svg width="100%" height="100%" viewBox="0 0 634 705" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="cardFigure">
                    <g id="cards">
                        <rect className={styles.svgCard} id="firstRect" x="192.5" y="125.5" width="249" height="309" rx="5.5" fill="white" stroke="#C8C8C8" />
                        <rect className={styles.svgCard}id="secondRect    " x="192.5" y="125.5" width="249" height="309" rx="5.5" fill="white" stroke="#C8C8C8" />
                        <rect className={styles.svgCard}id="thirdRect" x="192.5" y="125.5" width="249" height="309" rx="5.5" fill="white" stroke="#C8C8C8" />
                        <rect className={styles.svgCard}id="fourthRect" x="192.5" y="125.5" width="249" height="309" rx="5.5" fill="white" stroke="#C8C8C8" />
                        <rect className={styles.svgCard}id="fifthRect" x="192.5" y="125.5" width="249" height="309" rx="5.5" fill="white" stroke="#C8C8C8" />
                    </g>
                </g>
            </svg>

        </div>
    );
}

export default VisualPanel;