const n=document.querySelector("#search-box"),t=(document.querySelector(".country-list"),document.querySelector(".country-info"));n.addEventListener("input",(n=>{var e;(e=n.target.value,fetch(`https://restcountries.com/v2/name/${e}?fields=name,capital,population,flags,languages`).then((n=>{if(!n.ok)throw new Error(n.status);return n.json()}))).then((n=>function(n){console.log(n);const e=n.map((t=>`<h2><img src=${n.flags} alt="flag" width=30px> ${t.name}</h2>\n          <p>Capital: ${t.capital}</p>\n          <p>Population: ${t.population}</p>\n          <p>Languages: ${t.languages}</p>\n        </li>`)).join("");t.innerHTML=e}(n))).catch((n=>console.log(n)))}));
//# sourceMappingURL=index.33252de5.js.map
