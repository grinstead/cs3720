import './style.css'
import {makeQrCode} from "@grinstead/makeqrcode";

document.querySelector('#app').innerHTML = `
  <div>
    <label for="myinput">Put some text here:</label>
    <input type="text" id="myinput"></input>
    <div id="qrcode">Input Text!</div>
  </div>
`

const input = document.getElementById("myinput");

input.addEventListener("input", event => {
  updateQr(input.value);
});

function updateQr(value) {
  const { sideLength, path } = makeQrCode("L", value);

  document.getElementById("qrcode").innerHTML = `
  <svg width="320" height="320" viewBox="0 0 ${sideLength} ${sideLength}" xmlns="http://www.w3.org/2000/svg">
    <style>path {stroke: black;} background {color: white;}</style>
    <path d="${path}" />
  </svg>`;
}
