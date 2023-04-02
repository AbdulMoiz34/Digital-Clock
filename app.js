function time() {
    //  Intialize Variables
    var todayDate = new Date();
    var timeDiv = document.getElementById("time");
    var hour = todayDate.getHours();
    var min = todayDate.getMinutes();
    var seconds = todayDate.getSeconds();
    var meridium = "AM";
    //  12- Hour format
    if (hour > 12) {
        meridium = "PM";
        hour -= 12;
    }
    // If seconds,min & hour is less than 10 so add 0 in start e.g. "09" sec
    if (seconds < 10) {
        seconds = "0" + seconds;
    } if (hour < 10) {
        hour = "0" + hour;

    } if (min < 10) {
        min = "0" + min;
    }
    //    hour is equal to 0 then display hour is 12
    if (hour == 0) {
        hour = 12;
    }
    // In html div id is time changing inner text is equal to
    timeDiv = timeDiv.innerText = hour + " : " + min + " : " + seconds + " " + meridium;
}

function date() {
    // Initialize Variables
    var todayDate = new Date();
    var dateDiv = document.getElementById("date");
    var weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["Janury", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayName = weekNames[todayDate.getDay()];
    var date = todayDate.getDate();
    var monthName = monthNames[todayDate.getMonth()];
    var year = todayDate.getFullYear();

    // In html div id is date changing inner text is equal to
    dateDiv = dateDiv.innerText = dayName + ", " + date + " " + monthName + " " + year;
}

//  Call
setInterval(time, 1000);
date();