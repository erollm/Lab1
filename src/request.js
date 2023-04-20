const API_KEY = "f8cb2f9633206f4c62550e9f8166fa61";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=210749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
};

export default request;

//https://api.themoviedb.org/3//trending/all/week?api_key=f8cb2f9633206f4c62550e9f8166fa61&language=en-US
