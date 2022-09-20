import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        console.log(json);
        setMovie(json);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    },[]);

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {!loading && <>
                <img src={movie.data.movie.medium_cover_image} alt={movie.data.movie.title} />
                <h1>{movie.data.movie.title}</h1>
            </>}
        </div>
    )
}

export default Details;