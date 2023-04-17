const menu = document.getElementById('menu');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const overlay = document.querySelector('.overlay');

const toggleMenu = (open) => {
    if (!open) {
        menu.classList.remove('show');
        menu.classList.add('hidden');
        setTimeout(() => {
            menu.style.display = "none"
        }, 500)
    } else {
        menu.style.display = "block"
        menu.classList.add('show');
        menu.classList.remove('hidden');
    }
};

const resizeHandler = () => {
    if (window.innerWidth < 920) {
        menu.style.display = "none"
        menu.classList.remove('show');
    }
    if (window.innerWidth > 920) {
        menu.style.display = 'block'
        menu.classList.remove('hidden')
    }
};

const scrollHandler = () => {
    toggleMenu(false);
};

openBtn.addEventListener('click', () => toggleMenu(true));
closeBtn.addEventListener('click', () => toggleMenu(false));
window.addEventListener('resize', resizeHandler);
window.addEventListener('scroll', scrollHandler);



