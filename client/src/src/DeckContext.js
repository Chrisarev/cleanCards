import { createContext } from "react";

const DeckContext = createContext({
    currDeck: '',
    setCurrDeck: () =>{}
}); 

export default DeckContext; 