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
    },[fetchData]);

    // SHORTENS MOVIE DESCRIPTION
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }
   
    
    return ( 
        <div 
            className="hero-container"
            style={{
                backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url("${baseImgUrl}${movie.backdrop_path}")`
            }}>
            <div className="hero-content">
                <h2 className="hero-h2">{movie.name ? movie.name : movie.original_title}</h2>
                <p className="hero-p">{truncate(movie.overview, 135)}</p>
                <div className="hero-btn-wrapper">
                    <button className="play-btn"><i className="fas fa-play"></i>Play</button>
                    <button className="more-info-btn"><i className="fas fa-info-circle"></i>More Info</button>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;