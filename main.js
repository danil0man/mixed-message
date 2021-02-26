// Team- below is just an outline using pseudo code of how I think the script could go
// please give feedback and make any changes you think would be beneficial (this is
// just my first stab, not the answer!)


// time and day function
//      1) get time and day from native javascript function.
//      2) categorize time of day into meal type (breakfast, brunch, lunch, dinner).
//             - save variable typeOfMeal
//      3) return typeOfMeal, and dayOfWeek standard format.


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