function Brewery({brewery}) {
    // console.log(brewery);
    return (
        <>
            <h1>{brewery.name}</h1>
            <h2>{brewery.brewery_type}</h2>
            <h3>{brewery.city}, {brewery.state}</h3>
        </>
    )
}

export default Brewery;