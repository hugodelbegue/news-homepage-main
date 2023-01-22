window.addEventListener('load', () => {
    const menu = document.getElementById('menu');
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const overlay = document.querySelector('.overlay');

    // Open and close links menu
    const openMenu = () => {
        menu.style.transform = 'translateX(0px)';
        menu.style.transition = 'transform 1s';
        close.style.display = 'flex'
        close.style.visibility = 'visible';
        overlay.style.display = 'block';
    }
    const closeMenu = () => {
        menu.style.transform = 'translateX(220px)';
        menu.style.transition = 'transform 1s'
        close.style.visibility = 'hidden';
        overlay.style.display = 'none';
    }

    // Back to resizing the window
    const resizeWindow = () => {
        menu.style.transform = 'translateX(220px)';
        close.style.display = 'none';
        overlay.style.display = 'none';
        if (window.innerWidth >= 920) {
            menu.style.transform = 'translateX(0px)';
        }
    }

    // Back to scroll
    const scrollWindow = () => {
        if (window.scrollY) {
            menu.style.transform = 'translateX(220px)';
            close.style.display = 'none';
            overlay.style.display = 'none';
        }
    }

    open.addEventListener('click', openMenu);
    close.addEventListener('click', closeMenu);
    window.addEventListener('resize', resizeWindow);
    window.addEventListener('scroll', scrollWindow);


    // window.addEventListener("orientationchange", () => {
    //     console.log("The orientation of the screen is: " + window.orientation);
    //     if (window.orientation == 0 || window.orientation == 90) {
    //         console.log('hello');
    //         menu.style.transform = 'translateX(220px)!important';
    //         close.style.visibility = 'hidden';
    //     }
    // });
});



