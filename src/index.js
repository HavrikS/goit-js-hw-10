import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import {fetchCountrys} from './fetchCountries.js';

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce((e) => {
  fetchCountrys(e.target.value.trim())
    .then((countrys) => markupCountry(countrys))
    .catch(() => Notiflix.Notify.failure("Oops, there is no country with that name"));
  cleanMarkap();
}, DEBOUNCE_DELAY));


function markupCountry(countrys) {
  if (countrys.length >= 2 && countrys.length <= 10) {
    countrys
      .map((country) => {
        ulMarkupCountry(country);
      })
  } else if (countrys.length === 1) {
    countrys
      .map((country) => {
        divMarkupCountry(country);
      })    
  } else {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
  }  
}

function ulMarkupCountry(country) {  
  countryList.insertAdjacentHTML('afterbegin', `<li class="list">
  <h2 class="list--title"><img class="list--img" src=${country.flags.svg} alt="flag" width=30px> ${country.name.official}</h2>
  </li>`);
}

function divMarkupCountry(country) {
  countryInfo.insertAdjacentHTML('afterbegin',
    `<h2 class="list--title"><img class="list--img" src=${country.flags.svg} alt="flag" width=30px> ${country.name.official}</h2>
    <p><b>Capital: </b> ${country.capital}</p>
    <p><b>Population: </b> ${country.population}</p>
    <p><b>Languages: </b> ${Object.values(country.languages).join(", ")}</p>`);
}

function cleanMarkap() {
  countryList.innerHTML = "";
  countryInfo.innerHTML = "";
}

