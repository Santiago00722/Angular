import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../componentes/Spinner";
import { get } from "../utils/htppClient";
import style from "./MovieDetails.module.css";
import { useQuery } from "../hooks/useQuery";
//import movie from "./Detailsmovie.json";

export function MovieDetails() {
    const { movieId } = useParams();
    const [ isLoanding, setIsLoading ] = useState(true);
    const [movie, setMovie] = useState(null);

    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
    }, [search]);

    useEffect(() => {
        setIsLoading(true);

        get("/movie/" + movieId)
            .then((data) => {
                setMovie(data);
                setIsLoading(false);
            });
    }, [movieId]);

    if (isLoanding) {
        return <Spinner />
    }

    const imageURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    return (
        <div className={style.DetallePelicula}>
            <img className={`${style.col} ${style.movieImage}`}
                src={imageURL}
                alt={movie.title}
            />

            <div className={`${style.col} ${style.DetallePelicula}`}>
                <p><strong>Titulo:</strong> {movie.title} </p>
                <p>
                    <strong>Generos:</strong>
                    {movie.genres.map(genre => genre.name).join(", ")}
                </p>
                <p><strong>Descripción:</strong> {movie.overview} </p>

            </div>
        </div>


    )
}