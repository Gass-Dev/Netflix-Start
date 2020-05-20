import {
  fetchMovie,
  fetchTv,
  fetchNetflixOriginals,
  fetchTrending,
  fetchTopRated,
  fetchByGenreMovies,
  fetchSearch,
} from "./apiService.js";

import Header from "./components/Header.mjs";
import Trending from "./components/Trending.mjs";
import NetflixOriginals from "./components/NetflixOriginals.mjs";
import Rated from "./components/Rated.mjs";
import Genre from "./components/Genre.mjs";

import Modale from "./components/Modale.mjs";

import {
  genres
} from "./data.js";

import Search from "./components/Search.mjs";

(() => {
  let movie = fetchMovie(157336)
    .then(movie => {
      document.getElementById("header").innerHTML = Header(movie);
      document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
    })
})();

(() => {
  let Movie_netflix = document.getElementsByClassName('movies__container')[0]
  let movie = fetchNetflixOriginals()
    .then(movie => {
      movie.results.forEach(oneMovie => {
        Movie_netflix.innerHTML += NetflixOriginals(oneMovie)

        let images = document.querySelectorAll('.movies__container--movie-image');
        for (let i = 0; i < images.length; i++) {
          images[i].addEventListener('click', () => {
            let id = movie.results[i].id;
            let tv = fetchTv(id)
              .then(tv => {
                Movie_netflix.innerHTML = Modale(tv);
              })
          })
        }
      })
    })
})();

(() => {
  let Movie_trending = document.getElementsByClassName('movies__container')[1]
  let movie = fetchTrending()
    .then(movie => {
      movie.results.forEach(oneMovie => {
        Movie_trending.innerHTML += Trending(oneMovie)
      })
    })
})();

(() => {
  let Movie_topRated = document.getElementsByClassName('movies__container')[2]
  let movie = fetchTopRated()
    .then(movie => {
      movie.results.forEach(oneMovie => {
        if (oneMovie.backdrop_path !== null) {
          Movie_topRated.innerHTML += Rated(oneMovie)
        }
      })
    })
})();

(() => {
  let Movie_genreMovies = document.getElementsByClassName('movies__container')[3]
  let movie = fetchByGenreMovies(genres.find(genre => genre.name === "Action").id)
    .then(movie => {
      movie.results.forEach(oneMovie => {
        if (oneMovie.backdrop_path !== null) {
          Movie_genreMovies.innerHTML += Genre(oneMovie)
        }


      })
    })
})();


(() => {
  let Movie_genreMovies = document.getElementsByClassName('movies__container')[4]
  let movie = fetchByGenreMovies(genres.find(genre => genre.name === "Comedy").id)
    .then(movie => {
      movie.results.forEach(oneMovie => {
        if (oneMovie.backdrop_path !== null) {
          Movie_genreMovies.innerHTML += Genre(oneMovie)
        }
      })
    })
})();

(() => {
  let Movie_genreMovies = document.getElementsByClassName('movies__container')[5]
  let movie = fetchByGenreMovies(genres.find(genre => genre.name === "Documentary").id)
    .then(movie => {
      movie.results.forEach(oneMovie => {
        if (oneMovie.backdrop_path !== null) {
          Movie_genreMovies.innerHTML += Genre(oneMovie)
        }
      });

    })
})
();

(() => {
  let Search_Movie = document.querySelector('.navigation__container--left__input');
  let search = fetchSearch("starwars").then((movie) => {
    function debounce(callback, delay) {
      let timer = null;
      return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer)
        timer = setTimeout(function () {
          callback.apply(context, arguments);
        }, delay)
      }
    }

    Search_Movie.addEventListener('keyup', function (e) {
      if (this.value.length > 3) {
        console.log('keyup', e);
      }
    })

    Search_Movie.addEventListener('keyup', debounce(function (e) {
      console.log('keyup avec debounce', e);
    }, 300));
  })
})()