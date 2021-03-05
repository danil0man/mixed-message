/*Added an event listener that waits for the "DOMContentLoaded" event, then runs a function.
The DOMContentLoaded event gets fired by the browser after the dom is completely loaded.  
All html rendered, all images loaded, and, most importantly, all javascript files are loaded
so its basically "wait till everything is good to go, then run this function". */

document.addEventListener("DOMContentLoaded", function(){

/*Added languge to access information from menu-maker.json and make it available for index.html.
Also include a short tutorial on how to access the information/log to console.*/

var xhttp = new XMLHttpRequest();                                   //this created a new http request to get something 
xhttp.onreadystatechange = function() {                             //this is what its going to do when the call is completed.
    if (this.readyState == 4 && this.status == 200) {               //if the status 200, then do some work.  200 means OK
        menu = JSON.parse(xhttp.responseText);                //do whatever you want with the string of data (the text file) you just got. loading an object/array. parsed it from JSON to JS.       
    }
};
xhttp.open("GET", "menu-maker.json", true);                         //this is where we actually set the request
xhttp.send();                                                       //here is where we actually make the call to fetch some shit

});


const getMenu = () => {
    // Selects the form
    let food = document.getElementById('food');
    // Select the Title Heading
    let heading = document.querySelector('.menu__heading');
    // Display Food Type
    let displayFood = document.querySelectorAll('.showtext');
    // Identify the Type of Menu
    let selectedValue = food.value;
    // 'breakfast', 'lunch', 'dinner'
    // Create a heading depending of the type
    heading.innerHTML = `You have created a ${selectedValue} Menu`; 
    
    // menuLength will be number of items to return randomized.
    let menuLength = 3; 
    console.log(displayFood);
    let duplicateArray = [];
    for (let i = 0; i < menuLength; i++) {
        let index = Math.floor(Math.random() * menu[selectedValue].length);
        // while loop and duplicateArray ensure no duplicates menu items.
        while (duplicateArray.includes(index)) {
            index = Math.floor(Math.random() * menu[selectedValue].length)
        };
        duplicateArray.push(index);
        displayFood[i].innerHTML = `${menu[selectedValue][index].meal}, ${menu[selectedValue][index].price}`;
    }
};