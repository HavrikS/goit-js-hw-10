import './css/styles.css';

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

input.addEventListener('input', (e) => {
  fetchCountrys(e.target.value)
    .then((countrys) => markupCountry(countrys))
    .catch((error) => console.log(error));
});


function fetchCountrys(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function markupCountry(countrys) {
  console.log(countrys)  
  console.log(Object.values(countrys[0].languages).join(", "));
  const markup = countrys
    .map((country) => {
      return `<h2><img src=${country.flags.svg} alt="flag" width=30px> ${country.name.official}</h2>
          <p>Capital: ${country.capital}</p>
          <p>Population: ${country.population}</p>
          <p>Languages: ${Object.values(country.languages).join(", ")}</p>
        </li>`;
    })
    .join("");
  countryInfo.innerHTML = markup;
}

