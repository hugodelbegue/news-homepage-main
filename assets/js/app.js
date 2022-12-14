window.addEventListener('load', () => {
    const menu = document.getElementById('menu');
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const overlay = document.querySelector('.overlay');

    // Open and close links menu
    open.addEventListener('click', () => {
        menu.style.transform = 'translateX(0px)';
        menu.style.transition = 'transform 1s';
        close.style.visibility = 'visible';
        overlay.style.display = 'block';
    });
    close.addEventListener('click', () => {
        menu.style.transform = 'translateX(220px)';
        menu.style.transition = 'transform 1s'
        close.style.visibility = 'hidden';
        overlay.style.display = 'none';
    });

    // Back to resizing the window
    window.addEventListener('resize', () => {
        menu.style.transform = 'translateX(220px)';
        close.style.visibility = 'hidden';
        overlay.style.display = 'none';
        if (window.innerWidth >= 920) {
            menu.style.transform = 'translateX(0px)';
        }
    });

    // Back to scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY) {
            menu.style.transform = 'translateX(220px)';
            close.style.visibility = 'hidden';
            overlay.style.display = 'none';
        }
    });
});

// window.addEventListener("orientationchange", () => {
//     console.log("The orientation of the screen is: " + window.orientation);
//     if (window.orientation === 0 && window.orientation === 90) {
//         menu.style.transform = 'translateX(220px)!important';
//     }
// });


