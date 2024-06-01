import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { MoviesCard } from "./MoviesCard";
import { get } from "../utils/htppClient";
import { Spinner } from "../componentes/Spinner";
//import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";


export function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [isLoanding, setIsLoading] = useState(true);

    const query = useQuery();
    const search = query.get("search");
    
    useEffect(() => {
        setIsLoading(true);
        const searchUrl= search 
          ? "/search/movie?query=" + search
          : "/discover/movie";

        get(searchUrl)
            .then(data => {
                setMovies(data.results);
                setIsLoading(false);
            });
    }, [search]);

    if (isLoanding) {
        return <Spinner />
    }

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MoviesCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
}