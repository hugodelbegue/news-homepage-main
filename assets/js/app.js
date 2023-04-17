const menu = document.getElementById('menu');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const overlay = document.querySelector('.overlay');

const toggleMenu = (open) => {
    if (!open) {
        overlay.style.display = '';
        menu.classList.remove('show');
        menu.classList.add('hidden');
        setTimeout(() => {
            menu.style.display = "none";
            document.body.style.overflow = '';
        }, 500)
    } else {
        overlay.style.display = 'block';
        menu.style.display = "block";
        menu.classList.add('show');
        menu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
};

const resizeHandler = () => {
    menu.style = ""
    menu.classList.remove('show');
    menu.classList.remove('hidden')
    overlay.style.display = '';
    document.body.style.overflow = '';
};

openBtn.addEventListener('click', () => toggleMenu(true));
closeBtn.addEventListener('click', () => toggleMenu(false));
window.addEventListener('resize', resizeHandler);



