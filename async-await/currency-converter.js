// https://restcountries.eu/rest/v2/currency/cop
// http://data.fixer.io/api/latest?access_key=c3e176fdba5077c6210a13a2e5759db6

const axios = require('axios');

// const getExchangeRate = (from, to) => {     return axios
// .get('http://data.fixer.io/api/latest?access_key=c3e176fdba5077c6210a13a2e575
// 9 db6')         .then((response) => {             const euro = 1 /
// response.data.rates[from];             const rate = euro *
// response.data.rates[to];             return rate         }); };

const getExchangeRate = async(from, to) => {
    try {
        const response = await axios.get('http://data.fixer.io/api/latest?access_key=c3e176fdba5077c6210a13a2e5759db6');
        const euro = 1 / response.data.rates[from];
        const rate = euro * response.data.rates[to];
        return rate;
        if (isNaN(rate)) {
            throw new Error();
        }
    } catch (error) {
        throw new Error(`Unable to get exchange rate ${from} and ${to}`);
    }
};

// const getCountries = (currencyCode) => {     return axios
// .get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
// .then((response) => {             return response                 .data
// .map((country) => country.name);         }); };

const getCountries = async(currencyCode) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
    return response
        .data
        .map(country => country.name);
    } catch (error) {
        throw new Error(`Unable to get countries that use ${currencyCode}.`)
    }
};

// const convertCurrency = (from, to, amount) => {     let convertedAmount;
// return getExchangeRate(from, to).then((rate) => {         convertedAmount =
// (amount * rate).toFixed(2);         return getCountries(to);
// }).then((countries) => {         return `${amount} ${from} is worth
// ${convertedAmount} ${to}. You can spend it in the following countries:
// ${countries.join(', ')}`;     }); };

const convertCurrency = async(from, to, amount) => {
    let rate = await getExchangeRate(from, to);
    let countries = await getCountries(to);
    let convertedAmount = (amount * rate).toFixed(2);
    return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in the following countries: ${countries.join(', ')}`;

};

// getExchangeRate('USD', 'CAD').then((rate) => {     console.log('rate', rate);
// }); getCountries('EUR').then((countries) => {     console.log('countries',
// countries); });

convertCurrency('USD', 'Eaera', 20).then((message) => {
    console.log(message);
}).catch((e) => {
    console.log(e.message);
});
