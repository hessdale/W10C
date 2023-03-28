//defining title variable by id title
let title = document.getElementById(`title`)
//defining a function to that changes background color to red
function make_red(details) {
    details[`target`][`style`][`backgroundColor`] = `red`;
};
//using event listener to change background of title variable to red
title.addEventListener(`click`, make_red);

//defining id_1 to be first_id on html page
let id_1 = document.getElementById(`first_id`);
//defining a function that changes the background color to blue
function make_blue(details) {
    details[`target`][`style`][`backgroundColor`] = `blue`;
};
//using event listener to change the background of id_1 to blue on a double click
id_1.addEventListener(`dblclick`, make_blue);

//defining id_2 to be `second_id` on html page
let id_2 = document.getElementById(`second_id`);
//defining function of be_blue to change background color to blue
function be_blue(details) {
    details[`target`][`style`][`backgroundColor`] = `blue`;
};
//defining function of be_white to change background color to white
function be_white(details) {
    details[`target`][`style`][`backgroundColor`] = `white`;
};
//using eventliteners on mouseenter and mouse leave to change background colors
id_2.addEventListener(`mouseenter`, be_blue);
id_2.addEventListener(`mouseleave`, be_white);
//defining variable for the body
let bodyhtml = document.querySelector(`body`);
//using function to check if space key is pressed then will change background color black
function be_black_space(details) {
    if (details[`code`] === `Space`) {
        details[`target`][`style`][`backgroundColor`] = `black`;
    }
};
//using ecent listener to look for keydown and hcange background to black on spacebar
bodyhtml.addEventListener(`keydown`, be_black_space);
