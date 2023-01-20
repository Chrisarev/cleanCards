import { useEffect, useState } from 'react';

const ExpressReact = () => {

    const [backEndData, setBackEndData] = useState([{}]);

    useEffect(() => {
        fetch("/api").then( ///fetch data from localhost:5000/api (relative path because of proxy set in package.json)
            response => response.json()
        ).then(
            data => { ///use set state method to set backEndData
                setBackEndData(data);
                console.log(backEndData) 
            }
        )
    }, [])

    return (  
        //if backEndData is still being retrieved show loading
        //else make p element displaying each user, with key set to index
        // (necessary for react when creating new DOM objects)
        <div>
            <p>HERE~!</p>
            {(typeof backEndData.users === 'undefined') ? (
                <p>Loading..</p>
            ) : (
                backEndData.users.map((user,i) =>(
                    <p key={i}>{user}</p>
                ))
            )}
        </div>
    );
}

export default ExpressReact;