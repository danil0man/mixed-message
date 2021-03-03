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
    // Generate Menu Depending on the Type
    if (selectedValue === 'breakfast') {
        displayFood.innerHTML = 'Breakfast Menu Here';
    } else if (selectedValue === 'lunch') {
        displayFood.innerHTML = 'Lunch Menu here';
    } else if (selectedValue === 'dinner') {
        displayFood.innerHTML = 'Dinner Menu here';
    }
};
