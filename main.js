// Team- below is just an outline using pseudo code of how I think the script could go
// please give feedback and make any changes you think would be beneficial (this is
// just my first stab, not the answer!)

// Description from the Kanban Board:
// Create a menu maker that Mon - Sat will create a new random menu (breakfast, lunch, dinner) 
// and Sun (brunch, dinner).  
// Breakfast is from 8 am - 11 am, 
// lunch 11 am to 5 pm, 
// dinner 5 pm to 10 pm.  
// Brunch on Sunday is from 8 am to 5 pm, then dinner from 5 to 10


// Get time and day
var d = new Date();
let currentHour = d.getHours(); // returns 0 through 23
let currentDay = d.getDay(); // returns weekday 0 through 6 starting with Sunday.
let dayOfWeek;
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
};
// Categorize time of day into meal type.
let typeOfMeal;
if (currentHour < 22 && currentHour >= 17) {
    typeOfMeal = 'dinner';
} else if (currentHour < 17 && currentHour >= 11 && currentDay != 0) {
    typeOfMeal = 'lunch';
} else if (currentHour < 11 && currentHour >= 8 && currentDay != 0) {
    typeOfMeal = 'breakfast';
} else if (currentHour < 17 && currentHour >= 8 && currentDay == 0) {
    typeOfMeal = 'brunch';
} else {
    typeOfMeal = 'none' // restaurant is closed.
};


// The menu could be an object, with objects for meal type, then arrays for 
// individual items.
// const menu {
//     breakfast {
//          drinks: [drink1, drink2, etc...],
//          sides: [side1, side2, etc...],
//          mains: [main1, main2, etc...]
//     },
//     brunch {
//          drinks: [drink1, drink2, etc...],
//          sides: [side1, side2, etc...],
//          mains: [main1, main2, etc...]
//     },
//     lunch {
//          drinks: [drink1, drink2, etc...],
//          sides: [side1, side2, etc...],
//          mains: [main1, main2, etc...],
//          desserts: [dessert1, dessert2, etc... ]
//     },
//     dinner {
//          drinks: [drink1, drink2, etc...],
//          sides: [side1, side2, etc...],
//          mains: [main1, main2, etc...],
//          desserts: [dessert1, dessert2, etc... ]
//     }
// }    


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