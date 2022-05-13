// import filter from'./javascript/blacklist.js'

// console.log(filter);
// let emails = ['mail0@mail.ru', 'mail1@ya.ru', 'mail1@mail.ru'];
// let blacklist = ['mail1@ya.ru', 'mail3@ya.ru'];

// console.log(filter(emails, blacklist));



import {Button} from "./javascript/button.js";

const root = document.getElementById('root');

root.appendChild(Button());
root.appendChild(Button('Привет'));