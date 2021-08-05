const circle = document.querySelector('.circle__second');
const line = document.querySelector('.circle__line');
const textBox = document.querySelector('.circle__line__text');
const text = document.querySelector('.circle__line__text__paragraph');

const classAdd = () => {
    circle.classList.toggle('active');

    if (circle.classList.contains('active')) {
        setTimeout(animationForward(), 100);
    } else {
        setTimeout(animationBackward(), 100);
    }
}

const animationForward = () => {
    line.style.width = '200%';
    setTimeout(function () {
        textBox.style.height = '250px';
        textBox.style.border = '1px solid black';
    }, 2000)

    setTimeout(function () {
        text.style.opacity = '1';
    }, 4000)
};

const animationBackward = () => {
    text.style.opacity = '0';

    setTimeout(function(){
        textBox.style.height = '0';
    }, 2000)

   setTimeout(function(){
        textBox.style.border = 'none';
    }, 4000)
    
    setTimeout(function(){
        line.style.width = '0%';
    }, 4000)
}

circle.addEventListener('click', classAdd);