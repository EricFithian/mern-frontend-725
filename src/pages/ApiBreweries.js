import { useEffect, useState } from 'react';
import ApiBrewery from '../components/ApiBrewery';

function ApiBreweries(props) {
    const [apiBreweries, setApiBreweries] = useState(null);
    const URL = "https://api.openbrewerydb.org/breweries"

    const getBreweries = async () => {
        try {
            const myBreweries = await fetch(URL);
            const allBreweries = await myBreweries.json();
            setApiBreweries(allBreweries);
        } catch(err) {
            console.log(err);
        }
    }

    console.log(apiBreweries);

    useEffect(() => {
        getBreweries();
    }, []);

    // if(people) {
    //     return ({people.map((person, idx) => {
    //         return (
    //             <>
    //                 <h1>{person.name}</h1>
    //             </>
    //         )
    //     })})
    // } else {
    //     return <h1>Loading...</h1>
    // }

    return (
        <>
            {apiBreweries ? apiBreweries.map((brewery, idx) => {
                return (
                    <div key={idx}>
                        <ApiBrewery brewery={brewery} />
                    </div>
                )
            }) : <h1>Loading...</h1>}
        </>
    )
}

export default ApiBreweries;