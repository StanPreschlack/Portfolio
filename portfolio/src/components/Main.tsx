import { component$, useClientEffect$, useStore } from '@builder.io/qwik'
import Projects from './Projects'
import Skills from './Skills'
import Home from './Home'
import * as THREE from 'three'

export default component$(({mode}: {mode: boolean}) => {
    const store = useStore({projectVisible: false, skillsVisible: false, homeVisible: true})

    useClientEffect$(() => {
        /**
         * Base
         */
        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        /**
         * Sizes
         */

        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        const textureLoader = new THREE.TextureLoader()
        const gradientTexture = textureLoader.load("textures/gradients/3.jpg")
        gradientTexture.magFilter = THREE.NearestFilter

        const particlesCount = 2000
        const positions = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * (sizes.width / sizes.height) * 2
            positions[i * 3 + 1] = (Math.random() - 0.5) * (sizes.width / sizes.height) * 2
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10
        }

        const particlesGeometry = new THREE.BufferGeometry()
        particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

        const particlesMaterial = new THREE.PointsMaterial({
            color: new THREE.Color("#b300ff"),
            size: 0.01,
        })

        const particles = new THREE.Points(particlesGeometry, particlesMaterial)

        scene.add(particles)

        const cursor = {
            x: 0,
            y: 0
        }

        window.addEventListener("mousemove", (event) => {
            cursor.x = (event.clientX / sizes.width) - 0.5
            cursor.y = (event.clientY / sizes.height) - 0.5
        })

        // lights

        const directionalLight = new THREE.DirectionalLight("#ffffff", 1)
        directionalLight.position.set(1, 1, 0)

        scene.add(directionalLight)

        window.addEventListener('resize', () =>
        {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        /**
         * Camera
         */

        const cameraGroup = new THREE.Group()
        scene.add(cameraGroup)

        // Base camera
        const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
        camera.position.z = 6
        cameraGroup.add(camera)

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            // @ts-ignore
            canvas: canvas,
            alpha: true,
        })

        /**
         * Animate
         */
        const clock = new THREE.Clock()

        let previousTime = 0

        const tick = () =>
        {
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()
            
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            
            const elapsedTime = clock.getElapsedTime()
            const deltaTime = elapsedTime - previousTime
            previousTime = elapsedTime

            // canvas scroll

            const parallaxX = cursor.x * 0.5
            const parallaxY = - cursor.y * 0.5
            cameraGroup.position.x += (parallaxX - cameraGroup.position.x)  * deltaTime
            cameraGroup.position.y += (parallaxY - cameraGroup.position.y)  * deltaTime

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()
    })

    return (
        <div>
            <canvas class="webgl"></canvas>
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
            {store.projectVisible ? <Projects /> : null }
            {store.skillsVisible ? <Skills /> : null }
            {store.homeVisible ? <Home mode={mode} /> : null }
        </div>
    )
})
