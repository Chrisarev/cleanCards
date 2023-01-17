import styles from './stylesheets/navbar2.module.css'
const Navbar = () => {
    return ( 
        <div className={styles.navbar}>
                <nav>
        <svg width="95px" height="95px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 1">
                <rect width="100" height="100" />
                <a id="logo" href=""></a>
                    <g id="logo">
                        <path id="Vector 2" d="M61 28C60.3333 27.1667 55 34.2 39 69L60 39.5L77.5 69L61 28Z" fill="white"
                            stroke="white" />
                        <path id="Vector 1"
                            d="M55.3851 70.6456C35.8457 64.0444 8.18125 45.2736 53.8379 23C48.4966 28.0165 37.9741 39.9742 38.6145 47.6729C39.2549 55.3715 50.0617 66.1958 55.3851 70.6456Z"
                            fill="white" stroke="white" />
                        <path id="Vector 3" d="M59.5 50L49.5 54L60 47L68.5 54L59.5 50Z" fill="white" stroke="white" />
                    </g>
            </g>
        </svg>
        <a id={styles.contactLink} href="">Contact Me</a>
    </nav>
        </div>
     );
}
 
export default Navbar;