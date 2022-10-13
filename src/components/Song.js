import { useEffect, useState } from 'react';
import ShowSong from './ShowSong';

function Song({song}) {
    const [mySong, setMySong] = useState(null);
    
    const getSong = async () => {
        try {
            const getMySong = await fetch(song);
            const parsedSong = await getMySong.json();
            setMySong(parsedSong);
        } catch(err) {
            console.log(err);
        }
    }
    
    console.log(mySong)
    useEffect(() => {
        getSong();
    }, []);

    const loaded = () => {
        <>
            <h2>Title: {mySong.title}</h2>
            <h2>Length in seconds: {mySong.length}</h2>
        </>
    }
    return (
        <>
            {mySong ? loaded() : <h1>Loading...</h1>}
            <hr />
        </>
    )
}

export default Song;