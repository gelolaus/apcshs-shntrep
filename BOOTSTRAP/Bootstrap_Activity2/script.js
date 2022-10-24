$("#run").click(function(){
    var month = prompt("What month were you born in? (numerical form)");
    var day = prompt("What day were you born on? (numerical form)");
    var year = prompt("What year were you born in? (numerical form)");

    // If the user inputs a month that is less than 1 or greater than 12, then the user will be alerted that the month is invalid
    if (month < 1 || month > 12){
        alert("Invalid month");
    }

    // If the user inputs a day that is less than 1 or greater than 31, then the user will be alerted that the day is invalid
    else if (day < 1 || day > 31){
        alert("Invalid day");
    }

    // If the user inputs a year that doesn't have four digits, then the user will be alerted that the year is invalid
    else if (year.length != 4){
        alert("Invalid year");
    }

    else if (month == 1){
        alert("January " + day + ", " + year);
    }

    else if (month == 2){
        alert("February " + day + ", " + year);
    }

    else if (month == 3){
        alert("March " + day + ", " + year);
    }

    else if (month == 4){
        alert("April " + day + ", " + year);
    }

    else if (month == 5){
        alert("May " + day + ", " + year);
    }

    else if (month == 6){
        alert("June " + day + ", " + year);
    }

    else if (month == 7){
        alert("July " + day + ", " + year);
    }

    else if (month == 8){
        alert("August " + day + ", " + year);
    }

    else if (month == 9){
        alert("September " + day + ", " + year);
    }

    else if (month == 10){
        alert("October " + day + ", " + year);
    }

    else if (month == 11){
        alert("November " + day + ", " + year);
    }

    else if (month == 12){
        alert("December " + day + ", " + year);
    }

});