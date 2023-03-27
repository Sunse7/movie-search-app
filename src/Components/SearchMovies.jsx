import './SearchMovie.css';
import { useEffect, useState } from "react";
import DisplayMovies from "./DisplayMovies";

function SearchMovies() {
    const API_URL = 'http://www.omdbapi.com/?apikey=37fe945a&s=';
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('idle hands');

    useEffect(() => {
        fetch(API_URL + search)
        .then(response => response.json())
        .then(data => setMovies(data.Search))
        .catch((err) => console.log(err))
    }, [search]);

    return ( 
        <section>
            <input type="text" placeholder="Search movie" onChange={(e) => {setSearch(e.target.value)}} />
            <DisplayMovies movies={movies} />
        </section>
     );
}

export default SearchMovies;