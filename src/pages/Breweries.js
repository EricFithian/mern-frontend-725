import { useEffect, useState } from 'react';
import Brewery from '../components/Brewery';
import ApiBreweries from './ApiBreweries';

function Breweries(props) {
    const [breweries, setBreweries] = useState(null);
    const URL = "http://localhost:4000/breweries"

    const getBreweries = async () => {
        try {
            const myBreweries = await fetch(URL);
            const allBreweries = await myBreweries.json();
            setBreweries(allBreweries);
        } catch(err) {
            console.log(err);
        }
    }

    console.log(breweries);

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
            <ApiBreweries />
            {breweries ? breweries.map((brewery, idx) => {
                return (
                    <div key={idx}>
                        <Brewery brewery={brewery} />
                    </div>
                )
            }) : <h1>Loading...</h1>}
        </>
    )
}

export default Breweries;