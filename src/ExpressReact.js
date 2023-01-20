import {useEffect, useState} from 'react'; 

const ExpressReact = () => {
    const [backEndData, setBackEndData] = useState([{}]);

    return (  
        fetch("/api").then( ///fetch data from localhost:5000/api (relative path because of proxy set in package.json)
            response => response.json()
        ).then(
            data => { ///use set state method to set backEndData
                setBackEndData(data); 
            }
        )
    );
}
 
export default ExpressReact;