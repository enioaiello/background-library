const LINKS = document.querySelectorAll('a.button');
function setActive() {
    let active = document.querySelectorAll('.button.active');
    for(let i = 0; i < active.length; i++) {
        active[i].classList.remove("active");
    }
    this.classList.add("active");
}

for(let i = 0; i < LINKS.length; i++) {
    LINKS[i].addEventListener('click', setActive);
}