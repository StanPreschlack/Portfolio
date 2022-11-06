import { component$ } from '@builder.io/qwik'

export default component$(() => {
    return (
        <>
            <div id="skill_icons">
                <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">
                    <img id="c" src="../public/images/skill_icons/c.png" alt="no image"></img>
                </a>
                <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank">
                    <img id="java" src="../public/images/skill_icons/java.png" alt="no image"></img>
                </a>    
                <a href="https://en.wikipedia.org/wiki/TypeScript" target="_blank">
                    <img id="ts" src="../public/images/skill_icons/ts.png" alt="no image"></img>
                </a>
                <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank">    
                    <img id="react" src="../public/images/skill_icons/react.png" alt="no image"></img>
                </a>  
                <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">    
                    <img id="python" src="../public/images/skill_icons/python.png" alt="no image"></img>
                </a>  
                <a href="https://github.com/BuilderIO/qwik" target="_blank">    
                    <img id="qwik" src="../public/images/skill_icons/qwik.png" alt="no image"></img>
                </a>   
                <a href="https://en.wikipedia.org/wiki/Docker_(software)" target="_blank">    
                    <img id="docker" src="../public/images/skill_icons/docker.png" alt="no image"></img>
                </a>   
                <a href="https://en.wikipedia.org/wiki/Tailwind_CSS" target="_blank">    
                    <img id="tailwind" src="../public/images/skill_icons/tailwind.png" alt="no image"></img>
                </a>
            </div>
            <div id="skills_desc">
                <h2>Skills</h2>
                <hr></hr>
                <p>These icons represent technologies I have worked with. Click on each one to learn more.</p>
            </div>
        </>
    )
})