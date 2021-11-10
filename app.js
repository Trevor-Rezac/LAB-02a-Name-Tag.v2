const nameInput = document.getElementById('name-input')
// console.log(nameInput)
const updateButton = document.getElementById('update-button')
// console.log(updateButton)
const nameTag = document.getElementById('name-tag')
// console.log(nameTag)

const tagColorTop = document.getElementById("red-tag-top")
// console.log(tagColorTop)
const tagColorBottom = document.getElementById('red-tag-bottom')
const blueButton = document.getElementById('blue')
// console.log(blueButton)
const greenButton = document.getElementById('lightgreen')
const orangeButton = document.getElementById('orange')
const redButton = document.getElementById('red')
const crazyButton = document.getElementById('crazy-button')
// console.log(crazyButton)

const userPronouns = document.getElementById('pronouns')
// console.log(userPronouns)

updateButton.addEventListener('click', () => {
    const newName = nameInput.value;
    const newPronouns = userPronouns.value;
    nameTag.textContent = `${newName} ${newPronouns}`;
    nameInput.value = '';

});

nameInput.addEventListener('keyup',
    function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            const newName = nameInput.value;
            const newPronouns = userPronouns.value;
            nameTag.textContent = `${newName} ${newPronouns}`;
            nameInput.value = ''
        }
    }
);

blueButton.addEventListener('click', () => {
    tagColorTop.style.backgroundColor = 'blue';
    tagColorBottom.style.backgroundColor = 'blue';
});

greenButton.addEventListener('click', () => {
    tagColorTop.style.backgroundColor = 'green';
    tagColorBottom.style.backgroundColor = 'green';
})

orangeButton.addEventListener('click', () => {
    tagColorTop.style.backgroundColor = 'orange';
    tagColorBottom.style.backgroundColor = 'orange';
})

redButton.addEventListener('click', () => {
    tagColorTop.style.backgroundColor = 'red';
    tagColorBottom.style.backgroundColor = 'red';
})


//RANDOM  COLOR PICKER

//create an array with the hex decimal values
const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//add event listener to the button
//in the event listener, we call a function to occur. the function is creating a hex color by looping through the array
crazyButton.addEventListener('click', function() {
    //create a hex color by looping through the array 6 times and adding each value to the string "#"
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hexArr[getRandomNumber()];
        // the += is important because just an = will cause hexColor to overwrite the value of hexArr, not add to it
    }

//this is just the action of the eventlistener, which is to change the color of the div 
tagColorTop.style.backgroundColor = hexColor;
tagColorBottom.style.backgroundColor = hexColor;
})

//this is the function used above. 
//define the function as getRandomNumber. the function returns the value of a random number, rounded down. then multiplied by the length of the array i.e. random number 0-15
function getRandomNumber() {
    return Math.floor(Math.random() * hexArr.length);
}

