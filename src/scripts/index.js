let text = document.querySelector('h2');
let leaf = document.querySelector('#leaf');
let hill1 = document.querySelector('#hill1');
let hill4 = document.querySelector('#hill4');
let hill5 = document.querySelector('#hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginBottom = value * 1.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.bottom = value * 1.5 + 'px';
})

