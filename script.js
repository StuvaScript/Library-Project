let myLibrary = [];

function Book() {

};

function addBookToLibrary() {

};

let formAppearBtn = document.querySelector('.form-appear-btn');
let formPicker = document.querySelector('.form-wrap');

formAppearBtn.addEventListener('click', () => {
    formPicker.classList.remove('form-invisible');
});