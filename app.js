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





