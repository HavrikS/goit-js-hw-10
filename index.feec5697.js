!function(){var n=document.querySelector("#search-box"),t=(document.querySelector(".country-list"),document.querySelector(".country-info"));n.addEventListener("input",(function(n){var o;(o=n.target.value,fetch("https://restcountries.com/v2/name/".concat(o,"?fields=name,capital,population,flags,languages")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))).then((function(n){return function(n){console.log(n);var o=n.map((function(t){return"<h2><img src=".concat(n.flags,' alt="flag" width=30px> ').concat(t.name,"</h2>\n          <p>Capital: ").concat(t.capital,"</p>\n          <p>Population: ").concat(t.population,"</p>\n          <p>Languages: ").concat(t.languages,"</p>\n        </li>")})).join("");t.innerHTML=o}(n)})).catch((function(n){return console.log(n)}))}))}();
//# sourceMappingURL=index.feec5697.js.map