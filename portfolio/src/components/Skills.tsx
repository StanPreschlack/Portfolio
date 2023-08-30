import { component$ } from '@builder.io/qwik'

export default component$(() => {
    if (window.innerWidth > 500) {
    return (
        <>
            <div id="skill_icons">
                <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">
                    <img id="c" src="/images/skill_icons/c.png" alt="no image"></img>
                </a>
                <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank">
                    <img id="java" src="/images/skill_icons/java.png" alt="no image"></img>
                </a>    
                <a href="https://en.wikipedia.org/wiki/TypeScript" target="_blank">
                    <img id="ts" src="/images/skill_icons/ts.png" alt="no image"></img>
                </a>
                <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank">    
                    <img id="react" src="/images/skill_icons/react.png" alt="no image"></img>
                </a>  
                <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">    
                    <img id="python" src="/images/skill_icons/python.png" alt="no image"></img>
                </a>  
                <a href="https://github.com/BuilderIO/qwik" target="_blank">    
                    <img id="qwik" src="/images/skill_icons/qwik.png" alt="no image"></img>
                </a>   
                <a href="https://en.wikipedia.org/wiki/firebase" target="_blank">    
                    <img id="firebase" src="/images/skill_icons/firebase.png" alt="no image"></img>
                </a>   
                <a href="https://en.wikipedia.org/wiki/vue.js" target="_blank">    
                    <img id="vue" src="images/skill_icons/vue.png" alt="no image"></img>
                </a>
            </div>
            <div id="skills_desc">
                <h2>Skills</h2>
                <hr></hr>
                <p>These icons represent some technologies I have worked with. Click on each one to learn more.</p>
            </div>
        </>
    )
    } else {
        return (
            <></>
        )
    }
})
