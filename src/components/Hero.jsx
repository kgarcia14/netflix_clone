import '../styles.css';
import axios from '../axios';
import { useEffect, useState } from 'react';


const Hero = ({fetchData}) => {
    const [movie, setMovie] = useState([]);
    const baseImgUrl = 'https://image.tmdb.org/t/p/original';

    useEffect( () => {
        const fetch = async () => {
            let response = await axios.get(fetchData);
            setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)]);
        }
        fetch()
    },[fetchData])
    console.log(movie);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }
   
    
    return ( 
        <div className="hero-container">
            <div className="hero-content">
                <h2 className="hero-h2">{movie.name ? movie.name : movie.original_title}</h2>
                <p className="hero-p">{truncate(movie.overview, 125)}</p>
            </div>
            <div className="hero-img-wrapper">
                <img className="hero-img"src={`${baseImgUrl}${movie.backdrop_path}`}alt={movie.name ? movie.name : movie.original_title}></img>
            </div>
        </div>
     );
}
 
export default Hero;