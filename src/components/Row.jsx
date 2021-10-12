import '../styles.css';
import { useState, useEffect } from "react";
import axios from '../axios';

const Row = ({title, fetchData}) => {
    const [movies, setMovies] = useState([]);
    const baseImgUrl = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        const fetch = async () => {
            let response = await axios.get(fetchData);
            setMovies(response.data.results);
        }
        fetch();
    }, [fetchData])

    return ( 
        <div className="row-container">
            <h3>{title}</h3>
            <ul className="row-wrapper">
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <img className="row-img" src={`${baseImgUrl}${movie.poster_path}`}alt={movie.name ? movie.name : movie.original_title}></img>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default Row;