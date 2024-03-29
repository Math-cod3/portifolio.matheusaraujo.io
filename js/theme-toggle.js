document.addEventListener('DOMContentLoaded', ()=>{
    switchTheme()
})

function switchTheme(theme) {
    const body = document.body

    const dotWhite = document.querySelector('.switch-white')
    const dotBlack = document.querySelector('.switch-black')
    const dotPurple = document.querySelector('.switch-purple')
    const dotBlue = document.querySelector('.switch-blue')
    const sections = document.querySelectorAll('section')
    const paragraphs = document.querySelectorAll('p')
    const h2 = document.querySelectorAll('h2')
    const title = document.querySelector('h1')
    const iconSectionSkill = document.querySelector('.main-content-skill span i')
    // const logo = document.querySelector('.logo')

    getstoreActiveTheme()

    switch (theme) {
        case 'white':
            toWhite();
            break;
        case 'purple':
            toPurple();
            break;
        case 'black':
            toBlack();
            break;
        case 'blue':
            toBlue();
            break;
        default:
    }

    function toWhite() {
        localStorage.setItem('active-theme', 'white');
        body.classList.remove('theme-purple');
        body.classList.remove('theme-black');
        body.classList.add('theme-white');
        body.classList.remove('theme-blue');

        dotBlack.classList.remove('active-theme');
        dotPurple.classList.remove('active-theme');
        dotWhite.classList.add('active-theme');
        dotBlue.classList.remove('active-theme');
        // iconSectionSkill.style.color = '#0B142B'

        body.style.color = '#18191A'
        title.style.color = '#22292F'

        sections.forEach(item => {
            item.style.background = '#fff'


        })

        paragraphs.forEach(item => {
            item.style.color = '#18191A'

        })

        h2.forEach(item => {
            item.style.color = '#0D0C22'

        })

        sections[0].style.background = 'transparent'


    }

    function toPurple() {
        localStorage.setItem('active-theme', 'purple')
        body.classList.remove('theme-white');
        body.classList.remove('theme-black');
        body.classList.add('theme-purple')
        body.classList.remove('theme-blue');

        dotBlack.classList.remove('active-theme');
        dotPurple.classList.add('active-theme');
        dotWhite.classList.remove('active-theme');
        dotBlue.classList.remove('active-theme');
        // iconSectionSkill.style.color = '#0B142B'

        body.style.color = '#18191A'
        title.style.color = '#22292F'

        sections.forEach(item => {

            item.style.background = '#fff'

        })

        paragraphs.forEach(item => {
            item.style.color = '#18191A'

        })
        paragraphs[0].style.color = '#d1d1d1'

        h2.forEach(item => {
            item.style.color = '#0D0C22'

        })
        sections[0].style.background = 'transparent'
    }

    function toBlack() {
        localStorage.setItem('active-theme', 'black')
        body.classList.remove('theme-white');
        body.classList.remove('theme-purple');
        body.classList.add('theme-black');
        body.classList.remove('theme-blue');

        dotBlack.classList.add('active-theme');
        dotPurple.classList.remove('active-theme');
        dotWhite.classList.remove('active-theme');
        dotBlue.classList.remove('active-theme');
        // iconSectionSkill.style.color = '#fff'

        // texts theme

        body.style.color = '#d1d1d1'
        title.style.color = '#d1d1d1'

        // sections theme

        sections.forEach(item => {
            item.style.background = '#242526'

        })

        paragraphs.forEach(item => {
            item.style.color = '#d1d1d1'

        })

        h2.forEach(item => {
            item.style.color = '#A3AEB7'

        })
        sections[0].style.background = 'transparent'
    }

    function toBlue() {
        localStorage.setItem('active-theme', 'blue')
        body.classList.remove('theme-white');
        body.classList.remove('theme-purple');
        body.classList.remove('theme-black');
        body.classList.add('theme-blue');

        dotBlue.classList.add('active-theme');
        dotPurple.classList.remove('active-theme');
        dotWhite.classList.remove('active-theme');
        dotBlack.classList.remove('active-theme');
        // iconSectionSkill.style.color = '#0B142B'

        body.style.color = '#18191A'
        title.style.color = '#22292F'

        sections.forEach(item => {

            item.style.background = '#fff'

        })

        paragraphs.forEach(item => {
            item.style.color = '#18191A'

        })

        h2.forEach(item => {
            item.style.color = '#0D0C22'

        })
        sections[0].style.background = 'transparent'


    }

    function getstoreActiveTheme(){
        let activeTheme = localStorage.getItem('active-theme') 

        activeTheme = activeTheme == null ? toWhite() : activeTheme
        
        activeTheme = activeTheme == 'white' ? toWhite() : activeTheme
        activeTheme = activeTheme == 'purple'? toPurple() : activeTheme
        activeTheme = activeTheme == 'black'? toBlack() : activeTheme
        activeTheme = activeTheme == 'blue'? toBlue() : activeTheme

        
    }
    

}

// document.getElementById('theme-toggler').addEventListener('click', handleSwitchTheme())

function handleSwitchTheme() {
    let isOpen = false
    const toggler = document.querySelector('.switch-theme')

    if (!isOpen && !toggler.classList.contains('active-themeToggler')) {
        toggler.classList.add('active-themeToggler')
        isOpen = true
    } else {
        toggler.classList.remove('active-themeToggler')
    }

}


// handleSwitchTheme()

