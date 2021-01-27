fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data)

function data(countries) {
    console.log(countries[1])
    countries.forEach(eachCountry)
}

function eachCountry(country) {

    const copy = document.querySelector("template").content.cloneNode(true);


    copy.querySelector('img').src = country.flag;
    copy.querySelector('.country').textContent = country.name;
    copy.querySelector('#pop').textContent = country.population;
     copy.querySelector('#reg').textContent = country.region;
     copy.querySelector('#cap').textContent = country.capital;

    document.querySelector('section').appendChild(copy)
}


/*
 */
