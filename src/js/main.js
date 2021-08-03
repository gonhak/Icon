const barTwo = document.querySelector('.nav__btn--two');
const barThree = document.querySelector('.nav__btn--three');
const navBtn = document.querySelector('.nav__btn');
const optionPage = document.querySelector('.nav__page');
const circles = document.querySelectorAll('.nav__page__option');
const blue = document.querySelector('.nav__page--blue');
const green = document.querySelector('.nav__page--green');
const red = document.querySelector('.nav__page--red');
const grey = document.querySelector('.nav__page--grey');
const Text = document.querySelector('.nav__error');

const CollapseBars = () => {
    navBtn.classList.toggle('active')

    if(navBtn.classList.contains('active')){
        barTwo.style.height = '100%';
        barThree.style.height = '100%';
    }else{
        barTwo.style.height = '75%';
        barThree.style.height = '50%';
    };

    optionNav();
};

const optionNav = () => {
    if(navBtn.classList.contains('active')){
        optionPage.style.top = "0";
    }else{
        optionPage.style.top = "-255px";
    };
};

const ChangeColorB = () => {
    document.documentElement.style.setProperty('--color', 'royalBlue');
    CollapseBars();
};

const ChangeColorG = () => {
    document.documentElement.style.setProperty('--color', 'yellowgreen');
    CollapseBars();
};

const ChangeColorR = () => {
    document.documentElement.style.setProperty('--color', 'tomato');
    CollapseBars();
};

const ChangeColorGr = () => {
    document.documentElement.style.setProperty('--color', 'grey');
    CollapseBars();
};

navBtn.addEventListener('click', CollapseBars);
blue.addEventListener('click', ChangeColorB);
green.addEventListener('click', ChangeColorG);
red.addEventListener('click', ChangeColorR);
grey.addEventListener('click', ChangeColorGr);