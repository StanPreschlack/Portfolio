import { component$ } from '@builder.io/qwik'
 
//true for dark false for light
export default component$(({mode}: {mode: boolean}) => {
    return (
        <div id="main-name">
            <img id="profile_img" src='portfolio/src/images/profile.png'></img>
                <h1>
                    <span>S</span>
                    <span>t</span>
                    <span>a</span>
                    <span>n</span>
                    <span> </span>
                    <span>P</span>
                    <span>r</span>
                    <span>e</span>
                    <span>s</span>
                    <span>c</span>
                    <span>h</span>
                    <span>l</span>
                    <span>a</span>
                    <span>c</span>
                    <span>k</span>
                </h1>
                <p>
                    <span>S</span>
                    <span>o</span>
                    <span>f</span>
                    <span>t</span>
                    <span>w</span>
                    <span>a</span>
                    <span>r</span>
                    <span>e</span>
                    <span> </span>
                    <span>D</span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>l</span>
                    <span>o</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                </p>
                <hr></hr>
                <div id="links">
                    {/* github */}
                    <a rel="" href="https://github.com/StanPreschlack" target="_blank"><img src={mode ? 'portfolio/src/images/icons/github_l.png' : '../public/images/icons/github_d.png'} alt='image missing!!'></img></a>
                    {/* linkedin */}
                    <a rel="" href="https://www.linkedin.com/in/stan-preschlack-49aa211b2/" target="_blank"><img src={mode ? '../public/images/icons/linkedin_l.png' : '../public/images/icons/linkedin_d.png'} alt='image missing!!'></img></a>
                    {/* email */}
                    <a rel="" href="mailto:spp9311@nyu.edu" target="_blank"><img src={mode ? '../public/images/icons/email_l.png' : '../public/images/icons/email_d.png'}></img></a>
                </div>
        </div>
    )
})
