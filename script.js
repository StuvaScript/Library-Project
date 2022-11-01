let myLibrary = [];

function Book(title, author, read, suck) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.suck = suck;
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
    thirdDiv.textContent = `${myLibrary[0].read}`;
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
    document.querySelectorAll('[type=text]')
        .forEach(input => {
            input.value = '';
        });

    document.querySelectorAll('input:checked')
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
    // console.log(title);
    let author = document.querySelector('#author').value;
    // console.log(author);
    let read;
    let readInq = document.querySelectorAll('[name="read"]')
        .forEach(readIt => {
            if (readIt.checked) {
                read = readIt.value;
            }
        });
    // console.log(read);

    let suck;
    let suckInq = document.querySelectorAll('[name="suck"]')
        .forEach(suckIt => {
            if (suckIt.checked) {
                suck = suckIt.value;
            }
        });    
    // console.log(suck);
        
    if (title === '' || author === '' || title.trim().length === 0 || author.trim().length === 0) {
        let warning = document.querySelector('.warning')
        .classList.remove('invisible');
        return;
    } else {
        let warning = document.querySelector('.warning')
        .classList.add('invisible');
    }

    let newBook = new Book(title, author, read, suck);
    // console.log(newBook);

    addBookToLibrary(newBook);

    // console.log(myLibrary);

    addCards();

    formVisible.classList.add('invisible');
    
    formReset();

    let deleteBtn = document.querySelector('.card')
    .addEventListener('click', function(e) {
    if (e.target.classList.value === 'removeBtn') {
        console.log(this.getAttribute('data-number'));
        this.remove();
        // USE SPLICE() TO REMOVE THE ARRAY VALUE

        // amendDataNumber(); <--- MAYBE ADD THIS BACK IN??
        }  
    });

    amendDataNumber()
    console.log(myLibrary);
})

function amendDataNumber() {
    // console.log(myLibrary.length + ' length');
    for (let i = 0; i < myLibrary.length; i++ ) {
        // console.log(i + ' i');
        let cycle = document.querySelector(`.container :nth-child(${i + 1})`);
        // console.log(cycle + ' cycle');
        cycle.setAttribute('data-number', `${myLibrary.length - 1}`);
    }
};

