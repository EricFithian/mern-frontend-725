function Person({person}) {
    console.log(person);
    return (
        <>
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
            <img src={person.image} alt={person.name} />
        </>
    )
}

export default Person;