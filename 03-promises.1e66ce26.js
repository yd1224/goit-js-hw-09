function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},o.parcelRequired7c6=i);var l=i("7Y9D8");const r=document.querySelector(".form"),d=document.querySelector("#btn");function s(e,o){return Math.random()>.3?Promise.resolve({position:e,delay:o}):Promise.reject({position:e,delay:o})}console.log(d),d.disabled=!1,r.addEventListener("submit",(function(o){o.preventDefault(),d.disabled=!0,d.disabled=!0;const t=+r.delay.value,n=+r.step.value,i=+r.amount.value;for(let o=1,a=t;o<=i;o+=1,a+=n)setTimeout((()=>{s(o,a).then((({position:o,delay:t})=>{e(l).Notify.success(` Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(l).Notify.failure(` Rejected promise ${o} in ${t}ms`)})).finally((()=>{o===i&&(d.disabled=!1,r.reset())}))}),a)}));
//# sourceMappingURL=03-promises.1e66ce26.js.map