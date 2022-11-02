import { component$, useStore } from '@builder.io/qwik'
import Projects from './Projects'
import Skills from './Skills'
import Home from './Home'

export default component$(() => {
    const store = useStore({projectVisible: false, skillsVisible: false, homeVisible: true})
    return (
        <div>
            <div id="button_container">
                <button className="learn-more" onClick$={() => {
                    store.homeVisible = false
                    store.projectVisible = true
                    store.skillsVisible = false
                }}>projects</button>
                <button onClick$={() => {
                    store.homeVisible = true
                    store.projectVisible = false
                    store.skillsVisible = false
                }}>home</button>
                <button onClick$={() => {
                    store.homeVisible = false
                    store.projectVisible = false
                    store.skillsVisible = true
                }}>skills</button>
            </div>
            {store.projectVisible? <Projects /> : null }
            {store.skillsVisible? <Skills /> : null }
            {store.homeVisible? <Home /> : null }
        </div>
    )
})
