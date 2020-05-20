export default function Rated(props) {
    return `
            <div class="movies__container--movie">
                <img
                src="https://image.tmdb.org/t/p/w500/${props.backdrop_path}"
                class="movies__container--movie-image"
                />
            </div>
            `;
}