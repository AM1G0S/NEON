//MENU - Фиксирую меню при скролле
window.onscroll = function () { chpoks() };

var menu = document.getElementById("menu");
var fixed = menu.offsetTop;


function chpoks() {
    if (window.pageYOffset >= fixed) {
        menu.classList.add("fixed");
    } else {
        menu.classList.remove("fixed");
    }
}

//SLIDER - Настройки слайдера
$('.slider__inner').slick({
    pauseOnHover: true,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});


//ADDRESS костыли чтобы карта менялась при нажатии на кнопку
const msk = document.querySelectorAll(".msk");
const ing = document.querySelectorAll (".ing");

let msk__map = document.getElementById('msk__map')
let ing__map = document.getElementById('ing__map')

for(let item of msk) {
    item.addEventListener("click", function(){
        msk__map.classList.add('visible');
        ing__map.classList.remove('visible')
    })
}

for(let i of ing) {
    i.addEventListener("click", function(){
        ing__map.classList.add('visible');
        msk__map.classList.remove('visible')
    })
}


//Якорная ссылка
jQuery(document).ready(function () {
    jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });
});

//Popup



//поле для ввода номера телефона
jQuery(function($){
    $("#phone").mask("+7 (999) 999-9999");
 });


 //анимация
 