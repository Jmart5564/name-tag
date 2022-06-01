// grab DOM elements
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
// set event listeners
nameInput.addEventListener('input', () => {
    //console.log('Success!');
    const name = nameInput.value;
    nameDisplay.textContent = name;
})

// get info from user input
// use user input to update state
// update DOM to reflect the new state