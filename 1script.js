//для створення індикатора завантаження на сторінці, коли ми заходимо на сайт
function loader() {
    document.querySelector('.loader-img').
    classList.add('active');
}
function fadeOut() {
    setTimeout(loader, 3000);
}
fadeOut();

//для створення додавання товарів у корзину
let carsrl_zero_count = document.querySelector('.cirl-zero')
let yarislive_buttons = document.querySelectorAll('.yl-btn')
for(let i = 0; i < yarislive_buttons.length; i += 1){
    yarislive_buttons[i].addEventListener('click', function(){
        carsrl_zero_count.innerHTML =+ carsrl_zero_count.innerHTML +1
    })
}
