(function () {
    const header = document.querySelector('.layout .main-header');
    const navbar = header.querySelector('.navbar');
    
    const menu = document.getElementById('main-menu');
    const burger = document.getElementById('burger');

    const offsetTop = 150;
    const mdBreakePoint = 768;
    
    const openClass = 'pull-out-menu';
    
    const hideClass = 'hide';

    let Y = window.pageYOffset; // current Y offset

    
    let isOpen = () => menu.classList.contains(openClass);
    let isHide = () => header.classList.contains(hideClass);

    let initOpen = () => {
        
        burger.classList.add('burger');
        menu.classList.add(openClass);
        document.body.style.overflowY = 'hidden';
    };

    let initClose = () => {
        
        menu.classList.remove(openClass);
        burger.classList.remove('burger');
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
