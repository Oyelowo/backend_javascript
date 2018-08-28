const exponentialSmoothing = (prevWeekSales, prevWeekForcast, alpha) => {
    return (alpha * prevWeekSales + (1 - alpha) * prevWeekForcast)
}

const getDateOfPrevWeekDay = (day) => {
    day = day.toLowerCase();
    // The weekdays are created in reverse for their indexes to be used later.
    // because previous sunday is the closest to a new week while previous Monday is
    // farthest from the new week
    let weekDays = [
        "sunday",
        "saturday",
        "friday",
        "thursday",
        "wednesday",
        "tuesday",
        "monday"
    ];
    if (!weekDays.includes(day)) {
        throw Error('Date is incorrect. Check your spelling');
    }

    let date = new Date();
    let todayNumber = date.getDay();

    // This assumes that the week starts on Monday and ends on Sunday(0 to 6)
    let lastDayOfPrevWeek = date.getDate() - todayNumber;
    date.setDate(lastDayOfPrevWeek);
    let sameDayPreviousWeek = date.getDate() - weekDays.indexOf(day);
    date.setDate(sameDayPreviousWeek);
    return date.toLocaleDateString()
}

const getForecast = (day, productCode, outletCode, alpha) => {
    // Get data(which is an array of objects) from each outlet
    let outletData = Db.getOutlet(outletCode);

    // filter the data by given day and product code
    let filteredProductArray = outletData.filter(el => {
        // get Day from date values which can be compared with the day in the parameters
        let dateOfPrevWeekDay = getDateOfPrevWeekDay(day);
        return (el.date === dateOfPrevWeekDay && el.productCode === productCode);
    });

    // Deconstructure previous week's sales and forecast from the filteredArray
    const {sales: prevWeekSales, forecast: prevWeekForcast} = filteredProductArray[0];

    let forecast = exponentialSmoothing(prevWeekSales, prevWeekForcast, alpha);
    return forecast;
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