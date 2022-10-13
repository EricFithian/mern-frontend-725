import { useEffect, useState } from 'react';
import Song from '../components/Song';

function Artists(props) {
    const [artists, setArtists] = useState(null);
    const URL = "http://localhost:8000/artists/"

    const getArtists = async () => {
        try {
            const myArtists = await fetch(URL);
            const allArtists = await myArtists.json();
            setArtists(allArtists);
        } catch(err) {
            console.log(err);
        }
    }

    console.log(artists);

    useEffect(() => {
        getArtists();
    }, []);

    return (
        <>
            {artists ? artists.map((artist, idx) => {
                return (
                    <div key={idx}>
                        <img src={artist.img} alt={artist.name} />
                        <h3>{artist.bio}</h3>
                        <p>{artist.name}</p>
                        {artist.songs.map((song, idx) => {
                            return(
                                <div key={idx}>
                                    <h2>Songs for {artist.name}:</h2>
                                    <Song song={song}/>
                                </div>
                            )
                        })}
                    </div>
                )
            }) : <h1>Loading...</h1>}
        </>
    )
}

export default Artists;