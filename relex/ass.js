const fs = require('fs');
let data = require('./posts.json');

const exponentialSmoothing = (prevWeekSales, prevWeekForcast, alpha) => {
    return (alpha * prevWeekSales + (1 - alpha) * prevWeekForcast)
}

const getForecast = (day, productCode, outletCode, alpha) => {
    let outletData = Db.get(outletCode);
    
    let filteredProductArray = outletData.filter(el => {
        let elDay = (el.date).getDay();
       return (elDay === day && el.productCode === productCode);
    });

    const {sales: prevWeekSales, forecast: prevWeekForcast} = filteredProductArray;

    let forecast = exponential_smoothing(prevWeekSales, prevWeekForcast, alpha);
    return forecast;
}

const exponentialSmoothing = (prevWeekSales, prevWeekForcast, alpha) => {
    return (alpha * prevWeekSales + (1 - alpha) * prevWeekForcast)
}

const getForecast = (day, productCode, outletCode, alpha, dataset) => {
    const filterArray = dataset.filter(el => {
        let elDay = (el.date).getDay();
        return elDay === day && el.productCode === productCode && el.outletCode === outletCode
    });

    const {sales: prevWeekSales, forecast: prevWeekForcast} = filterArray;

    let forecast = exponential_smoothing(prevWeekSales, prevWeekForcast, alpha);
    return forecast;
}

const exponentialSmoothing = (prevWeekSales, prevWeekForcast, alpha) => {
    return (alpha * prevWeekSales + (1 - alpha) * prevWeekForcast)
}

const getData = (id, title, data) => {
    return data.filter(el => el.id == id && el.title === title);
}
console.log(getData('6', 'dolorem eum magni eos aperiam quia', data));

console.log(new Date('2018-08-22').toDateString());

const getForecast = (day, productCode, outletCode, alpha, dataset) => {
    let resultObj = dataset.filter(el => {
        el.day === day && el.productCode === productCode && el.outletCode === outletCode
    });

    let {sales: prevWeekSales, forecast: prevWeekForcast} = resultObj;

    let forecast = exponential_smoothing(prevWeekSales, prevWeekForcast);
    return forecast;
}
