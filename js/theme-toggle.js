function switchTheme(theme) {
    const body = document.body

    const dotWhite = document.querySelector('.switch-white')
    const dotBlack = document.querySelector('.switch-black')
    const dotPurple = document.querySelector('.switch-purple')

    body.classList.add('theme-white');
    dotWhite.classList.add('active-theme')

    switch(theme){
        case 'white': toWhite();
        break;
        case 'purple': toPurple();
        break;
        case 'black': toBlack();
        break;
        default:
    }

    function toWhite(){
        body.classList.remove('theme-purple');
        body.classList.remove('theme-black');
        body.classList.add('theme-white');

        dotBlack.classList.remove('active-theme');
        dotPurple.classList.remove('active-theme');
        dotWhite.classList.add('active-theme');

    }
    function toPurple(){
        body.classList.remove('theme-white');
        body.classList.remove('theme-black');
        body.classList.add('theme-purple')

        dotBlack.classList.remove('active-theme');
        dotPurple.classList.add('active-theme');
        dotWhite.classList.remove('active-theme');

    }
    function toBlack(){
        body.classList.remove('theme-white');
        body.classList.remove('theme-purple');
        body.classList.add('theme-black');

        dotBlack.classList.add('active-theme');
        dotPurple.classList.remove('active-theme');
        dotWhite.classList.remove('active-theme');
    }


}

switchTheme()