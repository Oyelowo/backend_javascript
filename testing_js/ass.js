const exponentialSmoothing = (prevWeekSales, prevWeekForcast, alpha) => {
    if(alpha>1 || alpha<0){
        throw Error('alpha should be within 0 and 1');
    }
    return (alpha * prevWeekSales + (1 - alpha) * prevWeekForcast)
}

// This function gets the date of a day in the previous week
const getDateOfPrevWeekDay = (day) => {
    day = day.toLowerCase();
    // The weekdays are created in reverse for their indexes to be used later.
    // because previous sunday is the closest to a new week while previous Monday is
    // farthest from the new week
    let weekDays = ["sunday", "saturday", "friday", "thursday", "wednesday", "tuesday","monday"];
    if (!weekDays.includes(day)) {
        throw Error('Date is incorrect. Check your spelling');
    };

    let date = new Date();
    let todayNumber = date.getDay();

    // This assumes that the week starts on Monday and ends on Sunday(0 to 6)
    let sundayPreviousWeek = date.getDate() - todayNumber;
    date.setDate(sundayPreviousWeek);
    // subtracting the index(0 to 6) of anyday from the previous week's sunday date will now
    // give the date of the same day in the previous week
    let sameDayPreviousWeek = date.getDate() - weekDays.indexOf(day);
    date.setDate(sameDayPreviousWeek);
    return date.toLocaleDateString();
};


const getForecast = (day, productCode, outletCode, alpha) => {
    // Get data(which is an array of objects) from an outlet
    let outletData = Db.getOutlet(outletCode);

    // filter the data by given day and product code
    let filteredProductArray = outletData.filter(el => {
        // get the date of the required day in the previous week and later compare with
        // the date in the database
        let dateOfPrevWeekDay = getDateOfPrevWeekDay(day);
        return (el.date === dateOfPrevWeekDay && el.productCode === productCode);
    });

    // Deconstructure previous week's sales and forecast from the filteredArray
    const {sales: prevWeekSales, forecast: prevWeekForcast} = filteredProductArray[0];

    let forecast = exponentialSmoothing(prevWeekSales, prevWeekForcast, alpha);
    return forecast;
};


module.exports={
    exponentialSmoothing,
    getDateOfPrevWeekDay,
    getForecast
}