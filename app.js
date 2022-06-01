// grab DOM elements
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
// set event listeners
nameInput.addEventListener('input', () => {
    //console.log('Success!');
    const name = nameInput.value;
    nameDisplay.textContent = name;
})

const freetimeInput = document.getElementById('freetime-input');
const freetimeDisplay = document.getElementById('freetime-display');
 //set event listeners
freetimeInput.addEventListener('input', () => {
    //console.log('Success!');
    const freetime = freetimeInput.value;
    freetimeDisplay.textContent = freetime;
})
// get info from user input
// use user input to update state
// update DOM to reflect the new state