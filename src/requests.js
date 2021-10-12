const API_KEY = '1f11715ffcc97dca8bac854645d23f8a';

const requests =  {
    getTrending: `/trending/all/week?api_key=${API_KEY}`,
    getOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    getActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    getComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    getHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    getRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}

export default requests;