import '../row.css';
import { useState, useEffect } from "react";
import axios from '../axios';

const Row = ({title, fetchData}) => {
    const [movies, setMovies] = useState([]);
    const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const fetch = async () => {
            let response = await axios.get(fetchData);
            setMovies(response.data.results);
        }
        fetch();
    }, [fetchData])
    console.log(movies);
    console.log();

    return ( 
        <div className="container">
            <h2>{title}</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <img src={`${baseImgUrl}${movie.poster_path}`}alt={movie.name ? movie.name : movie.original_title}></img>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default Row;