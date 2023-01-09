import { component$ } from '@builder.io/qwik'
import Project from './Project'

export default component$(() => {
    return (
        <>
            <div id="projects">
                <Project src="images/docs.png" name="Document Editor" ref="https://docu-share-2daee.web.app/" techOne='images/vue.png' techTwo='images/firebase.png' tecRefOne='https://en.wikipedia.org/wiki/vue.js' tecRefTwo='https://en.wikipedia.org/wiki/firebase'/>
                <Project src="images/roomates.png" name="Community Roomate Finder" ref="https://nyu-find-roommates.web.app/" techOne='images/vue.png' techTwo='images/firebase.png' tecRefOne='https://en.wikipedia.org/wiki/vue.js' tecRefTwo='https://en.wikipedia.org/wiki/firebase'/>
            </div>
        </>
    )
})
