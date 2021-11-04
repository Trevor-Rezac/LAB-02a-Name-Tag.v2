const nameInput = document.getElementById('name-input')
// console.log(nameInput)
const updateButton = document.getElementById('update-button')
// console.log(updateButton)
const nameTag = document.getElementById('name-tag')
// console.log(nameTag)

updateButton.addEventListener('click', () => {
    const newName = nameInput.value;
    nameTag.textContent = newName;
    nameInput.value = ''
});

nameInput.addEventListener('keyup',
    function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            const newName = nameInput.value;
            nameTag.textContent = newName;
            nameInput.value = ''
        }
    }
);









