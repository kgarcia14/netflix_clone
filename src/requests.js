const API_KEY = process.env.REACT_APP_API_KEY;

const requests =  {
    getTrending: `/trending/all/week?api_key=${API_KEY}`,
    getOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    getComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    getHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    getRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    getFamilyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=36`,
}

export default requests;