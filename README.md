# LAB-02a-Name-Tag.v2

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## HTML Setup
// 1) Input
// - Why? This tells us what words we will add to the box.
// - How?
// ```js
// const someWordsimyInput.value; // .value is a property that lives an input element, which grabs whatever words the user has typed
// ```
// 2) Button
// - Why? This tells us when we add to the box.
// - How? 
// ```js
// button.addEventListener('click', () => {
//     // in here, do stuff
// })
// ```
// 3) Some other div
// - Why? This is the box we'll inject words into.
// - How? 
// const inputEl = document.getElementById('my-input');
// const buttonEl = document.getElementById('my-button');
// const boxEl = document.getElementById('box');

// ```js
// someBox.textContent = someWords
// ```

// ## Events
// 1) User clicks the button
// buttonEl.addEventListener('click', () => {
//     callback function
//     "cool zone"
//     this is where 'stuff happens' after you click

//     - When the user clicks the button, we will grab words from the input (as in step 1) and then inject those words into the box (as in step 3)

//     const wordsTheUserTyped = inputEl.value;

//     boxEl.textContent = wordsTheUserTyped;

//     inputEl.value = '';
// });