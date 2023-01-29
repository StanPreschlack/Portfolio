import { component$, useStore, useStyles$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import globalStyles from './global.css?inline';
import Main from './components/Main'

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  // true is dark and false is light
  const store = useStore({theme: false})

  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body lang="en">
        <canvas class="webgl"></canvas>
        <Main mode={store.theme}/>
        <RouterOutlet />
        <ServiceWorkerRegister />
        <button id="theme_button" onClick$={() => {
          if (store.theme) {
            store.theme = false
            document.documentElement.style.setProperty('--text-color', '#132a4f')
            document.documentElement.style.setProperty('--theme-color', '#fff')
            document.documentElement.style.setProperty('--highlight-color', 'rgb(255, 226, 146)')
          } else {
            store.theme = true
            document.documentElement.style.setProperty('--text-color', '#fff')
            document.documentElement.style.setProperty('--theme-color', '#132a4f')
            document.documentElement.style.setProperty('--highlight-color', 'rgb(237, 192, 67)')
          }
        }}>{store.theme? "Light" : "Dark"} theme</button>
        <script type="module" src="https://github.com/StanPreschlack/portfolio/blob/c73b080aa733138df7c778c67a9f4b38ae7505c3/portfolio/src/particles/particles.js"></script>
      </body>
    </QwikCity>
  )
})
