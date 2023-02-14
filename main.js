import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    Hello, World!
  </div>
`

setupCounter(document.querySelector('#counter'))
