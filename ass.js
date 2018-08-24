const fs = require('fs');
let data = require('./posts.json');

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


    let {
        sales: prevWeekSales,
        forecast: prevWeekForcast
    } = resultObj;

    let forecast = exponential_smoothing(prevWeekSales, prevWeekForcast);
    return forecast;
}


