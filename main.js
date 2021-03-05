/*Added an event listener that waits for the "DOMContentLoaded" event, then runs a function.
The DOMContentLoaded event gets fired by the browser after the dom is completely loaded.  
All html rendered, all images loaded, and, most importantly, all javascript files are loaded
so its basically "wait till everything is good to go, then run this function". */

const getMenu = () => {
    // Selects the form
    let food = document.getElementById('food');
    // Select the Title Heading
    let heading = document.querySelector('.menu__heading');
    // Display Food Type
    let displayFood = document.querySelector('.showtext');
    // Identify the Type of Menu
    let selectedValue = food.value;
    // Create a heading depending of the type
    if (selectedValue === 'breakfast') {
        heading.innerHTML = 'You have created a Breakfast Menu';
    } else if (selectedValue === 'lunch') {
        heading.innerHTML = 'You have created a Lunch Menu';
    } else if (selectedValue === 'dinner') {
        heading.innerHTML = 'You have created a Dinner Menu';
    }

};


document.addEventListener("DOMContentLoaded", function(){

/*Added languge to access information from menu-maker.json and make it available for index.html.
Also include a short tutorial on how to access the information/log to console.*/

var xhttp = new XMLHttpRequest();                                   //this created a new http request to get something 
xhttp.onreadystatechange = function() {                             //this is what its going to do when the call is completed.
    if (this.readyState == 4 && this.status == 200) {               //if the status 200, then do some work.  200 means OK
        const menu = JSON.parse(xhttp.responseText);                //do whatever you want with the string of data (the text file) you just got. loading an object/array. parsed it from JSON to JS.
            // Generate Menu Depending on the Type
        // getMenu();                                                   //these commented out lines are a work-in-progres..
        // if (selectedValue === 'breakfast') {                     // need to figure out how to access "selectedValue" in this if statement...
        //     displayFood.innerHTML = menu.breakfast;
        // } else if (selectedValue === 'lunch') {
        //     displayFood.innerHTML = 'Lunch Menu here';
        // } else if (selectedValue === 'dinner') {
        //     displayFood.innerHTML = 'Dinner Menu here';
        // }                
        breakfast = menu.breakfast;                                 //setting variables to show how to access information
        brunch = menu.brunch;
        lunch = menu.lunch;
        dinner = menu.dinner;
        console.log(JSON.parse(xhttp.responseText));                 //logging json file
        console.log(breakfast, brunch, lunch, dinner);               //logging course menus
        console.log(breakfast[0], brunch[0], lunch[0], dinner[0])    //logging first meal from each menu array
        
    }
};
xhttp.open("GET", "menu-maker.json", true);                         //this is where we actually set the request
xhttp.send();                                                       //here is where we actually make the call to fetch some shit



});
