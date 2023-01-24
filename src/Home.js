import Navbar2 from './Navbar2.js'
import VisualPanel from './VisualPanel.js'
import InfoPanel from './InfoPanel.js'
import CardSection from './CardSection'
import DeckSection from './DeckSection'
import EndHomeSection from './EndHomeSection.js'
import './stylesheets/Home.css'
import {useContext} from 'react'
import { UserContext } from './UserContext.js'
const Home = () => {
    //const {userInfo,setUserInfo} = useContext(UserContext);
   // setUserInfo('CHANGED')
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
            {/*<div>{userInfo}</div>*/}
        </div>
      );
}

export default Home;