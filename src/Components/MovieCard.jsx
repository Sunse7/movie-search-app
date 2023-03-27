import './MovieCard.css'

function MovieCard({movie}) {
    return ( 
        <article>
            <section>
            <img src={movie.Poster} alt="Movie poster" />
            </section>
            <section>
            <h3>Title:</h3>
            <h3>{movie.Title}</h3>
            </section>
            <section>
            <h4>Year:</h4>
            <h4>{movie.Year}</h4>
            </section>
            <p>ID: {movie.imdbID}</p>
        </article>
     );
}

export default MovieCard;