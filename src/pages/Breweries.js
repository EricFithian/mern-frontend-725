import { useEffect, useState } from 'react';
import Brewery from '../components/Brewery';

function Breweries(props) {
    const [breweries, setBreweries] = useState(null);
    const URL = "http://localhost:4000/breweries"
    const [mySearch, setMySearch] = useState('')

    const getBreweries = async () => {
        try {
            const myBreweries = await fetch(URL);
            const allBreweries = await myBreweries.json();
            setBreweries(allBreweries);
        } catch(err) {
            console.log(err);
        }
    }

    // console.log(breweries);

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

    const handleChange = (e) => {
        e.preventDefault();
        setMySearch(e.target.value);
    }
    console.log(mySearch)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const myBreweries = await fetch('http://localhost:4000/breweries?search=' + mySearch);
            const allBreweries = await myBreweries.json();
            setBreweries(allBreweries);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={mySearch}
                    onChange={handleChange}
                />
                <button type="submit">Search for stuff!</button>
            </form>
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