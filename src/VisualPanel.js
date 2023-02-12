import styles from './stylesheets/VisualPanel.module.css'

const VisualPanel = () => {
    return (
        <div className={styles.panel}>
            <svg width="100%" height="100%" viewBox="0 0 634 705" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="cardFigure">
                    <g id="cards">
                        <rect className={styles.svgCard} id="firstRect" x="192" y="125" width="250" height="310" fill="white" />
                        <rect className={styles.svgCard} id="secondRect    " x="192" y="125" width="250" height="310" fill="black" />
                        <rect className={styles.svgCard} id="thirdRect" x="192" y="125" width="250" height="310" fill="white" />
                        <rect className={styles.svgCard} id="fourthRect" x="192" y="125" width="250" height="310" fill="black" />
                        <rect className={styles.svgCard} id="fifthRect" x="192" y="125" width="250" height="310" fill="white" />
                    </g>
                    <g className={styles.stars} id="stars">
                        <path id="Star 6" d="M202 401L206.49 414.82H221.021L209.265 423.361L213.756 437.18L202 428.639L190.244 437.18L194.735 423.361L182.979 414.82H197.51L202 401Z" fill="#D9D9D9" />
                        <path id="Star 1" d="M439.5 411L442.306 419.637H451.388L444.041 424.975L446.847 433.613L439.5 428.275L432.153 433.613L434.959 424.975L427.612 419.637H436.694L439.5 411Z" fill="#D9D9D9" />
                        <path id="Star 5" d="M250.5 421L253.306 429.637H262.388L255.041 434.975L257.847 443.613L250.5 438.275L243.153 443.613L245.959 434.975L238.612 429.637H247.694L250.5 421Z" fill="#D9D9D9" />
                        <path id="Star 2" d="M407 424L411.49 437.82H426.021L414.265 446.361L418.756 460.18L407 451.639L395.244 460.18L399.735 446.361L387.979 437.82H402.51L407 424Z" fill="#D9D9D9" />
                        <path id="Star 3" d="M324.5 411L327.306 419.637H336.388L329.041 424.975L331.847 433.613L324.5 428.275L317.153 433.613L319.959 424.975L312.612 419.637H321.694L324.5 411Z" fill="#D9D9D9" />
                        <path id="Star 4" d="M288 429L292.49 442.82H307.021L295.265 451.361L299.756 465.18L288 456.639L276.244 465.18L280.735 451.361L268.979 442.82H283.51L288 429Z" fill="#D9D9D9" />
                        <path id="Star 7" d="M364.5 424L367.306 432.637H376.388L369.041 437.975L371.847 446.613L364.5 441.275L357.153 446.613L359.959 437.975L352.612 432.637H361.694L364.5 424Z" fill="#D9D9D9" />
                    </g>
                </g>
            </svg>
        </div>
    );
}

export default VisualPanel;