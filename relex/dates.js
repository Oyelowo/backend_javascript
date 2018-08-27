let getPrevWeekDay = (day) => {
    var date = new Date();
    var dayOfWeek = date.getDay();
    date.setDate(date.getDate() - dayOfWeek);
    // console.log('let', date); 
    // console.log('date', date.toLocaleDateString(), '\n', date.toString());
    let weekDays = ["sunday", "saturday", "friday", "thursday", "wednesday", "tuesday", "monday"];
    if (weekDays.includes(day)) {
        date.setDate(date.getDate() - weekDays.indexOf(day));
    } else{
        throw Error('Date is incorrect');
    }
    return date.toLocaleDateString()
}

console.log('getPrevWeekDay', getPrevWeekDay('thursday'));