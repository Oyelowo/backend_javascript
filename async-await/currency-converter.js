// https://restcountries.eu/rest/v2/currency/cop
// http://data.fixer.io/api/latest?access_key=c3e176fdba5077c6210a13a2e5759db6

const axios = require('axios');

// const getExchangeRate = (from, to) => {     return axios
// .get('http://data.fixer.io/api/latest?access_key=c3e176fdba5077c6210a13a2e575
// 9 db6')         .then((response) => {             const euro = 1 /
// response.data.rates[from];             const rate = euro *
// response.data.rates[to];             return rate         }); };

const getExchangeRate = async(from, to) => {
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=c3e176fdba5077c6210a13a2e5759db6');
    const euro = 1 / response.data.rates[from];
    const rate = euro * response.data.rates[to];
    return rate;
};

// const getCountries = (currencyCode) => {     return axios
// .get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
// .then((response) => {             return response                 .data
//           .map((country) => country.name);         }); };

const getCountries = async(currencyCode) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
    return response.data.map(country => country.name);
};

c

getExchangeRate('USD', 'CAD').then((rate) => {
    console.log('rate', rate);
});

getCountries('EUR').then((countries) => {
    console.log('countries', countries);
});
