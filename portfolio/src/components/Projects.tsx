import { component$ } from '@builder.io/qwik'

export default component$(() => {
    return (
        <div id="projects">
            <div class="project" id="project_one">
                <h2>Document Editor</h2>
                <p>A rich text editor which supports a number of fonts, styles, video embedding and other features. It automatically saves progress and it great for note taking. It has a unique feature navigation system which helps keep the interface organized and accessible. It is serverless and made using Vue.js and Google Cloud Platform.</p>
                <a href="https://docu-share-2daee.web.app/" target='_blank'>View Project</a>
            </div>
            <div class="project" id="project_two">
                <h2>Social Site For Finding Roommates</h2>
                <p>A social site which consists of a message board where users can post. They might have an open space in an apartment they currently have, or about how many roommates they are looking for in an upcoming apartment search. Other users can reach out to them through their post and engage with them using a messaging service which I designed and implemented.</p>
                <a href="https://nyu-find-roommates.web.app/" target='_blank'>View Project</a>
            </div>
            <div class="project" id="project_three">
                <h2>IoT Data Platform System as a Service (in progress)</h2>
                <p>My current personal project is a data management service for individual users and companies who would like to be able to connect and manage IoT devices in their domain. It is designed to be easy to use and effective, leveraging many established services and libraries such as AWS IoT Core through a user friendly interface. It will also use powerful data JavaScript visualization libraries and Redis for caching and managing data streams. I will add a link to this project here once it is deployed, until then you can view my progress in the repository linked below.</p>
                <a target='_blank'>View GitHub Repository</a>
            </div>
        </div>
    )
})
