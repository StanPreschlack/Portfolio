import { component$ } from '@builder.io/qwik'
import Project from './Project'

export default component$(() => {
    return (
        <>
            <div id="projects">
                <Project src="images/docs.png" name="Document Editor" ref="https://docu-share-2daee.web.app/" techOne='images/vue.png' techTwo='images/firebase.png' tecRefOne='https://en.wikipedia.org/wiki/vue.js' tecRefTwo='https://en.wikipedia.org/wiki/firebase'/>
            </div>
            <p id="msg">I will be updating this page shortly! In the meantime you can find a lot of my code on my github <a rel="" href="https://github.com/StanPreschlack" target="_blank">HERE</a> </p>
        </>
    )
})
