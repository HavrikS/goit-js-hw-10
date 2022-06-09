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
  return fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`).then(
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
  const markup = countrys
    .map((country) => {
      return `<h2><img src=${countrys.flags} alt="flag" width=30px> ${country.name}</h2>
          <p>Capital: ${country.capital}</p>
          <p>Population: ${country.population}</p>
          <p>Languages: ${country.languages}</p>
        </li>`;
    })
    .join("");
  countryInfo.innerHTML = markup;
}

