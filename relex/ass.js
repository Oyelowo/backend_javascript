const fs = require('fs');
let data = require('./posts.json');

const exponentialSmoothing = (prevWeekSales, prevWeekForcast, alpha) => {
    return (alpha * prevWeekSales + (1 - alpha) * prevWeekForcast)
}

let getPrevWeekDay = (day) => {
    day = day.toLowerCase();
    let weekDays = ["sunday", "saturday", "friday", "thursday", "wednesday", "tuesday", "monday"];
    if (!weekDays.includes(day)) {
        throw Error('Date is incorrect. Check your spelling');
    }
    let date = new Date();
    let todayNumber = date.getDay();
    let lastDayOfLastWeek = date.getDate() - todayNumber;
    date.setDate(lastDayOfLastWeek);
    let sameDayPreviousWeek = date.getDate() - weekDays.indexOf(day);
    date.setDate(sameDayPreviousWeek);
    return date.toLocaleDateString()
}


const getForecast = (day, productCode, outletCode, alpha) => {
    // Get data(which is an array of objects) from each outlet
    let outletData = Db.get(outletCode);

    // filter the data by given day and product code
    let filteredProductArray = outletData.filter(el => {
        // get Day from date values which can be compared with the day in the parameters
        let elDay = (el.date).getDay();
        return (elDay === day && el.productCode === productCode);
    });

    // Deconstructure previous week's sales and forecast from the filteredArray
    const {sales: prevWeekSales, forecast: prevWeekForcast} = filteredProductArray;

    let forecast = exponentialSmoothing(prevWeekSales, prevWeekForcast, alpha);
    return forecast;
}


const getForecast = (day, productCode, outletCode, alpha, dataset) => {
    const filterArray = dataset.filter(el => {
        let elDay = (el.date).getDay();
        return elDay === day && el.productCode === productCode && el.outletCode === outletCode
    });

    const {
        sales: prevWeekSales,
        forecast: prevWeekForcast
    } = filterArray;

    let forecast = exponential_smoothing(prevWeekSales, prevWeekForcast, alpha);
    return forecast;
}