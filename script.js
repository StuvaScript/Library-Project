let myLibrary = [];

function Book() {

};

function addBookToLibrary() {

};

let formAppearBtn = document.querySelector('.form-appear-btn');
let formVisible = document.querySelector('.form-wrap');

formAppearBtn.addEventListener('click', () => {
    formVisible.classList.remove('invisible');
});

let submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let title = document.querySelector('#title').value;
    console.log(title);
    let author = document.querySelector('#author').value;
    console.log(author);
    let radio = document.querySelectorAll('[type="radio"]')
        .forEach(radio => {
            if (radio.checked) {
                console.log(radio.value);
            }
        });
})