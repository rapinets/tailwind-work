(function () {
    const header = document.querySelector('.layout .main-header');
    const navbar = header.querySelector('.navbar');
    const toggle = header.querySelector('.main-nav-holder .toggle-holder');
    const menu = document.getElementById('#menu');
    const burger = document.getElementById('#burger');

    const offsetTop = 150;
    const mdBreakePoint = 768;
    //const openClass = '--open';
    const openClass = 'left-0';
    const closeClass = '-left-full';
    const hideClass = '--hide';

    let Y = window.pageYOffset; // current Y offset

    //let isOpen = () => header.classList.contains(openClass);
    let isOpen = () => menu.classList.contains(openClass);
    let isHide = () => header.classList.contains(hideClass);

    let initOpen = () => {
        //header.classList.add(openClass);
        menu.classList.add(openClass);
        document.body.style.overflowY = 'hidden';
    };

    let initClose = () => {
        //header.classList.remove(openClass);
        menu.classList.add(closeClass);
        document.body.style.removeProperty('overflow-y');
    };

    document.addEventListener('click', (e) => {
        if (
            !isHide() &&
            (e.path.includes(burger) || (isOpen() && !e.path.includes(navbar)))
        ) {
            isOpen() ? initClose() : initOpen();
        }
    });

    window.onresize = () => {
        if (window.innerWidth >= mdBreakePoint) {
            if (isOpen()) {
                initClose();
            }
            header.classList.remove(hideClass);
        }
    };

    window.onscroll = () => {
        if (!isOpen() && Y > offsetTop) {
            window.pageYOffset - Y > 0
                ? header.classList.add(hideClass)
                : header.classList.remove(hideClass);
        }
        Y = window.pageYOffset;
    };
})();
