!function(){var t,e=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]"),d=document.querySelector("body");function n(){t=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),e.disabled=!0,a.disabled=!1}),1e3)}function o(d){d.target===e?n():d.target===a&&(clearInterval(t),e.disabled=!1,a.disabled=!0)}a.disabled=!0,e.addEventListener("click",o),a.addEventListener("click",o)}();
//# sourceMappingURL=01-color-switcher.e86a985c.js.map