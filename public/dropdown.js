function dropDown() {
    document.getElementById('dropdown').classList.toggle('md:hidden');
}

window.onclick = function (event) {
    if (!event.target.matches('.arrow')) {
        let dropdowns = document.getElementsByClassName('.auth-nav');
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('md:hidden')) {
                openDropdown.classList.remove('md:hidden');
            }
        }
    }
};
