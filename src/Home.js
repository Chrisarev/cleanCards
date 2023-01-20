import Navbar2 from './Navbar2.js'
import VisualPanel from './VisualPanel.js'
import InfoPanel from './InfoPanel.js'
import CardSection from './CardSection'
import DeckSection from './DeckSection'
import EndHomeSection from './EndHomeSection.js'
import './stylesheets/Home.css'

const Home = () => {
    return (
        <div className="homePage">
            <Navbar2 />
            <div className="layout">
                <VisualPanel />
                <InfoPanel />
            </div>
            <CardSection />
            <DeckSection />
            <EndHomeSection />
        </div>
      );
}

export default Home;