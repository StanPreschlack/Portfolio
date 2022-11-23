import { component$ } from '@builder.io/qwik'

export default component$((props: {name:string, src:string, ref:string, techOne:string, techTwo:string}) => {
    return (
        <div class="project">
            <p>{ props.name }</p>
            <div class="proj-img">
                <img src={ props.src }></img>
            </div>
            <a href={ props.ref } target="_blank">
                <span class="tooltiptext">Go to project</span>
            </a>
            <div id="tec">Technologies used:
                <img src={ props.techOne }></img>
                <img src={ props.techTwo } ></img>
            </div>
        </div>
    )
})
