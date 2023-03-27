import './DisplayMovies.css';
import MovieCard from "./MovieCard";

function DisplayMovies({movies}) {
  
    return ( 
        <section>
            {
               movies ? movies.map((movie, i) => (<MovieCard key={i} movie={movie} />)) : 
               <h2>No movie found</h2>
            }
        </section>
     );
}

export default DisplayMovies;