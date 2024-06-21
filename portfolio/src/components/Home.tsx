import { component$ } from "@builder.io/qwik";

//true for dark false for light
export default component$(() => {
  return (
    <div id="main-name">
      <img id="profile_img" src="/images/profile.png"></img>
      <h1>
        <span id="slashes">//</span>
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
      <p id="s-d">
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
      <div id="links">
        {/* github */}
        <a rel="" href="https://github.com/StanPreschlack" target="_blank">
          GitHub
        </a>
        {/** resume */}
        <span>|</span>
        <a href="./resume.pdf" download="Stan Preschlack Resume">
          Resume
        </a>
        <span>|</span>
        {/* email */}
        <a rel="" href="mailto:stanleypreschlack@gmail.com" target="_blank">
          Email
        </a>
        <span>|</span>
        {/* linkedin */}
        <a
          rel=""
          href="https://www.linkedin.com/in/stan-preschlack-49aa211b2/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
});
