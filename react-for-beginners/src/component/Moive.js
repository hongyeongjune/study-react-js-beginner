import { Link } from 'react-router-dom';

function Movie({ id, key, coverImg, title, summary, genres }) {
    return (
        <div key={key}>
            <img src={coverImg} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
            </ul>
        </div>
    )
}

export default Movie;