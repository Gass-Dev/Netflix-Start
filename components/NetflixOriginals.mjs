export default function NetflixOriginals(props) {
  return `
    <div class="movies__container--movie__netflix" aria-haspopup="modale" role="button" aria-controls="modale">
    <img 
      src="https://image.tmdb.org/t/p/original//${props.poster_path}"
      class="movies__container--movie-image"
    />
  </div>
          `;
}