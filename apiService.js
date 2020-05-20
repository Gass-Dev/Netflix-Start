const APÎ_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "2997c5290abfb556adf35db19e36cc28";

export function fetchMovie(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=fr-FR`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((movie) => {
      return movie;
    });
}

export function fetchTv(tvId) {
  const url = `https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}&language=fr-FR`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((tv) => {
      return tv;
    });
}

export function fetchNetflixOriginals() {
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((movie) => {
      return movie;
    });
}

export function fetchTrending() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((movie) => {
      return movie;
    });
}

export function fetchTopRated() {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=fr-FR&page=1`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((movie) => {
      return movie;
    });
}

export function fetchByGenreMovies(genre) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((movie) => {
      return movie;
    });
}

export function fetchSearch(search) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((movie) => {
      return movie;
    });
}