
let title = document.getElementById(`title`)

function make_red(details) {
    details[`target`][`style`][`backgroundColor`] = `red`;
}

title.addEventListener(`click`, make_red);


let id_1 = document.getElementById(`first_id`);

function make_blue(details) {
    details[`target`][`style`][`backgroundColor`] = `blue`;
}

id_1.addEventListener(`dblclick`, make_blue);


let id_2 = document.getElementById(`second_id`);

function be_blue(details) {
    details[`target`][`style`][`backgroundColor`] = `blue`;
}
function be_white(details) {
    details[`target`][`style`][`backgroundColor`] = `white`;
}

id_2.addEventListener(`mouseenter`, be_blue);
id_2.addEventListener(`mouseleave`, be_white);

let bodyhtml = document.querySelector(`body`);

function be_black(details) {

    details[`target`][`style`][`backgroundColor`] = `black`;
}


bodyhtml.addEventListener(`keydown`, be_black);
bodyhtml.addEventListener(`keyup`, be_white);