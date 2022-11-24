import { component$ } from '@builder.io/qwik'

export default component$((props: {name:string, src:string, ref:string, techOne:string, techTwo:string, tecRefOne:string, tecRefTwo:string}) => {
    return (
        <>
            <div class="project">
                <p>{ props.name }</p>
                <div class="proj-img">
                    <img src={ props.src }></img>
                </div>
            </div>
            <div id="tec">Built with Vue and Firebase
                <a href={ props.tecRefOne } target="_blank">
                    <img src={ props.techOne }></img>
                </a>    
                <a href={ props.tecRefTwo } target="_blank">
                    <img src={ props.techTwo } ></img>
                </a>    
                <a href={ props.ref } target="_blank">
                    <p>See project</p>
                </a>
            </div>
        </>
    )
})
