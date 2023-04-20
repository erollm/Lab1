const API_KEY = "f8cb2f9633206f4c62550e9f8166fa61";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=f8cb2f9633206f4c62550e9f8166fa61&sort_by=popularity.desc&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genre=10749`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=99`,
};

export default request;

//https://api.themoviedb.org/3/discover/movie?api_key=f8cb2f9633206f4c62550e9f8166fa61&sort_by=popularity.desc&with_genres=10749
