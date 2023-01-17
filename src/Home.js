import Navbar2 from './Navbar2.js'
import VisualPanel from './VisualPanel.js'
import InfoPanel from './InfoPanel.js'

import './stylesheets/Home.css'
const Home = () => {
    return (
        <div className="homePage">
            <Navbar2 />
            <div className="layout">
                <VisualPanel />
                <InfoPanel />
            </div>
        </div>
      );
}

export default Home;