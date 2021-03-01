
// please give feedback and make any changes you think would be beneficial (this is
// just my first stab, not the answer!)


// we want these two variables to be global
let dayOfWeek;
let typeOfMeal;

// to get dayOfWeek and typeOfMeal into the DOM
const day = document.querySelector('.day');
const meal = document.querySelector('.meal');

// we need this function to run as soon as the web page is opened
// Get time and day
const timeAndDay = () => {
    var d = new Date();
    let currentHour = d.getHours(); // returns 0 through 23
    let currentDay = d.getDay(); // returns weekday 0 through 6 starting with Sunday.
    if (currentDay == 0) {
        dayOfWeek = 'Sunday';
    } else if (currentDay == 1) {
        dayOfWeek = 'Monday';
    } else if (currentDay == 2) {
        dayOfWeek = 'Tuesday';
    } else if (currentDay == 3) {
        dayOfWeek = 'Wednesday';
    } else if (currentDay == 4) {
        dayOfWeek = 'Thursday';
    } else if (currentDay == 5) {
        dayOfWeek = 'Friday';
    } else {
        dayOfWeek = 'Saturday';
    }
    // Categorize time of day into meal type.
    if (currentHour < 22 && currentHour >= 17) {
        typeOfMeal = 'Dinner';
    } else if (currentHour < 17 && currentHour >= 11 && currentDay != 0) {
        typeOfMeal = 'Lunch';
    } else if (currentHour < 11 && currentHour >= 8 && currentDay != 0) {
        typeOfMeal = 'Breakfast';
    } else if (currentHour < 17 && currentHour >= 8 && currentDay == 0) {
        typeOfMeal = 'Brunch';
    } else {
        typeOfMeal = 'None'; // restaurant is closed.
    }
    // to get dayOfWeek and typeOfMeal into the DOM
    day.innerHTML = dayOfWeek;
    meal.innerHTML = typeOfMeal;
};

timeAndDay();

// The menu is an object, with objects for meal type, then arrays for 
// individual items.
const menu  = { 
    Breakfast: {
        drinks: ['drink1', 'drink2', 'drink3'],
        sides: ['side1', 'side2', 'side2'],
        mains: ['main1', 'main2', 'main3']
    },
    Brunch: {
        drinks: ['drink1', 'drink2', 'drink3'],
        sides: ['side1', 'side2', 'side2'],
        mains: ['main1', 'main2', 'main3']
    },
    Lunch: {
        drinks: ['drink1', 'drink2', 'drink3'],
        sides: ['side1', 'side2', 'side2'],
        mains: ['main1', 'main2', 'main3'],
        desserts: ['dessert1', 'dessert2', 'dessert3']
    },
    Dinner: {
        drinks: ['drink1', 'drink2', 'drink3'],
        sides: ['side1', 'side2', 'side2'],
        mains: ['main1', 'main2', 'main3'],
        desserts: ['dessert1', 'dessert2', 'dessert3']
    }
};    


// meal randomizer function (inputs: typeOfMeal, dayOfWeek)
//      logic for which meal:
//          logic for which day: 
//              access the menu item and randomize the drink, side, main, and dessert
//      return drink, side, main, dessert 


// Generate message function (inputs: typeOfMeal, drink, side, main, dessert)
//      use string functions to generate: 
//          What meal and day (monday lunch, sunday brunch, etc..)
//          The full meal
//      return the necessary strings (these will be routed to the HTML somehow...?)
