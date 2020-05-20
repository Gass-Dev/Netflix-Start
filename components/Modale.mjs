export default function Modale(props) {

    return `
    <div class="modale"
    id="modale"
    role="dialog"
    aria-labelledby="display modale movie"
    aria-describedby="display movie details"
    aria-modal="true"
    tabindex="-1"
    aria-hidden="true">
        
        <h1 class="modale__title">${props.name}</h1>

        <div class="modale__details">
            <p class="modale__rating">${props.vote_average}</p>
            <p class="modale__releseDate">${props.first_air_date}</p>
            <p class="modale__runtime">${props.episode_run_time[0]}</p>
        </div>

        <p class="modale__overview">${props.overview}</p>

        <div>
            <button class="modale__play">PLAY</button>
            <button class="modale__myList">MY LIST</button>
        </div>
    </div>
    
    `

}