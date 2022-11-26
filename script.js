let myLibrary = [];

class Book {
    constructor(title, author, read, suck) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.suck = suck;
    }

    haveYouRead(arg) {
        (arg === true) ? (this.read = 'read') : (this.read = 'did not read');    
    };

    checkControl() { 
        let checkMark = document.querySelector('[type=checkbox]');
        
        let labelContent = document.querySelector('.card label');
        if (labelContent.textContent === 'read') {
            checkMark.checked = true;
        }
    };

};

function addBookToLibrary(libraryBook) {
    myLibrary.unshift(libraryBook);
};

function addCards() {
    let newDiv = document.createElement('div');
    newDiv.classList.add('card');

    let firstDiv = document.createElement('div');
    firstDiv.textContent = `${myLibrary[0].title}`;

    let secondDiv = document.createElement('div');
    secondDiv.textContent = `${myLibrary[0].author}`;

    let thirdDiv = document.createElement('div');
    let labelThird = document.createElement('label');
    labelThird.textContent = `${myLibrary[0].read}`;
    thirdDiv.appendChild(labelThird);
    let checkThird = document.createElement('input');
    checkThird.setAttribute('type', 'checkbox');
    thirdDiv.appendChild(checkThird);

    let fourthDiv = document.createElement('div');
    fourthDiv.textContent = `${myLibrary[0].suck}`;

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    removeBtn.textContent = 'remove book';

    newDiv.appendChild(firstDiv);
    newDiv.appendChild(secondDiv);
    newDiv.appendChild(thirdDiv);
    newDiv.appendChild(fourthDiv);
    newDiv.appendChild(removeBtn);

    let container = document.querySelector('.container');
    container.insertBefore(newDiv, container.children[0]);
};

function formReset() {
    document.querySelectorAll('form [type=text]')
        .forEach(input => {
            input.value = '';
        });

    document.querySelectorAll('form input:checked')
        .forEach(checked => {
            checked.checked = false;
        });

    document.querySelectorAll('#not-read, #unsure')
    .forEach(button => {
        button.checked = true;
    });
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
    let author = document.querySelector('#author').value;
    let read;
    let readInq = document.querySelectorAll('[name="read"]')
        .forEach(readIt => {
            if (readIt.checked) {
                read = readIt.value;
            }
        });
    let suck;
    let suckInq = document.querySelectorAll('[name="suck"]')
        .forEach(suckIt => {
            if (suckIt.checked) {
                suck = suckIt.value;
            }
        });    
        
    if (title === '' || author === '' || title.trim().length === 0 || author.trim().length === 0) {
        let warning = document.querySelector('.warning')
        .classList.remove('invisible');
        return;
    } else {
        let warning = document.querySelector('.warning')
        .classList.add('invisible');
    }

    let newBook = new Book(title, author, read, suck);

    addBookToLibrary(newBook);

    addCards();

    formVisible.classList.add('invisible');
    
    let readBtn = document.querySelector('.card')
        .addEventListener('click', function(e) {
            if (e.target.getAttribute('type') === 'checkbox') {
                if (e.target.checked) {
                    myLibrary[`${this.getAttribute('data-number')}`].haveYouRead(true);
                    this.querySelector('label').textContent = 'read';
                } else {
                    myLibrary[`${this.getAttribute('data-number')}`].haveYouRead(false);
                    this.querySelector('label').textContent = 'did not read';
                }
            }
        });

    formReset();

    newBook.checkControl();

    let deleteBtn = document.querySelector('.card')
        .addEventListener('click', function(e) {
        if (e.target.classList.value === 'removeBtn') {
            this.remove();
            myLibrary.splice(`${this.getAttribute('data-number')}`, 1);
            amendDataNumber();
            }
        });

    amendDataNumber()
})

function amendDataNumber() {
    for (let i = 0; i < myLibrary.length; i++ ) {
        let cycle = document.querySelector(`.card:nth-child(${i + 1})`);
        cycle.setAttribute('data-number', `${i}`);
    }
};
