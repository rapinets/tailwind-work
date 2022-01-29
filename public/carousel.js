let btnPrev = document.querySelector('.carousel .carousel-btn .prev-btn');
let btnNext = document.querySelector('.carousel .carousel-btn .next-btn');
let items = document.querySelectorAll(
    '.carousel .carousel-holder .carousel-list .carousel-item'
);
let i = 0;

btnNext.onclick = function () {
    items[i].style.display = 'none';
    i++;
    if (i >= items.length) {
        i = 0; // переменная i равна 0
    }
    items[i].style.display = 'block';
};

btnPrev.onclick = function () {
    items[i].style.display = 'none';
    i = i - 1;
    if (i < 0) {
        i = items.length - 1;
    }
    items[i].style.display = 'block';
};

setInterval(function () {
    items[i].style.display = 'none';
    i++;
    if (i >= items.length) {
        i = 0; // переменная i равна 0
    }
    items[i].style.display = 'block';
}, 3000);
