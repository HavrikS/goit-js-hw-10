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
    ulMarkupCountry(countrys)     
  } else if (countrys.length === 1) {
    divMarkupCountry(countrys)
  } else {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
  }  
}

function ulMarkupCountry(countrys) {  
  const markapUl = countrys
    .map((country) => {
      return `<li class="list">
    <h2 class="list--title"><img class="list--img" src=${country.flags.svg} alt="flag" width=30px> ${country.name.official}</h2>
    </li>`;
    }).join("");
  countryList.innerHTML = markapUl
}

function divMarkupCountry(countrys) {
  const markapDiv = countrys
    .map((country) => {
    return `<h2 class="list--title"><img class="list--img" src=${country.flags.svg} alt="flag" width=30px> ${country.name.official}</h2>
    <p><b>Capital: </b> ${country.capital}</p>
    <p><b>Population: </b> ${country.population}</p>
    <p><b>Languages: </b> ${Object.values(country.languages).join(", ")}</p>`;
    }).join("");
  countryInfo.innerHTML = markapDiv
}

function cleanMarkap() {
  countryList.innerHTML = "";
  countryInfo.innerHTML = "";
}

