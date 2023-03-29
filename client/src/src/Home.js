import Navbar2 from './Navbar2.js'
import VisualPanel from './VisualPanel.js'
import InfoPanel from './InfoPanel.js'
import CardSection from './CardSection'
import DeckSection from './DeckSection'
import EndHomeSection from './EndHomeSection.js'
import Footer from './Footer.js'

import './stylesheets/Home.css'
import { useState,useEffect } from 'react'

const Home = () => {
    const [username1, setUsername1] = useState('');

    useEffect(() => {
        let varr = localStorage.getItem('username');
        if (varr === null) {

        } else {
            setUsername1(prev => varr)
        }
    }, [username1])

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
            <Footer />
        </div>
      );
}

export default Home;