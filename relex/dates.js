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
    // console.log('let', date); 
    // console.log('date', date.toLocaleDateString(), '\n', date.toString());
    let sameDayPreviousWeek = date.getDate() - weekDays.indexOf(day);
    date.setDate(sameDayPreviousWeek);
    return date.toDateString()

}

console.log('getPrevWeekDay', getPrevWeekDay('friday'));