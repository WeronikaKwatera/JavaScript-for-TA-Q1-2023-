class MonthException extends Error{
    constructor (message){
        this.message = message
        this.name= 'MonthException'
    }
}

const showMonthName = (month) =>{
    month = month -1;
    let months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    if(months[month] !== undefined) {
        return months [month];

    } else {
        throw new MonthException("Incorrect month number use number from 1 to 12")
    }
}

try {
    let myMonth = 12;
    let monthName = showMonthName(myMonth);
    console.log(monthName)
    
} catch (error) {
    console.error(error.name, error.message)
}