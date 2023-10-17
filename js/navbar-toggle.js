
function handleScroll() {
    const navbar = document.querySelector('.header')
    const logo = document.querySelector('.logo')
    const links = document.querySelectorAll('#nav-menu ul li a')
    const {
        scrollTop,
        innerWidth
    } = document.documentElement

    const isScroll = scrollTop <= 90

    if(window.localStorage.getItem('active-theme') == 'black'){
        logo.style.color = '#d1d1d1'
    }

    if (isScroll) {
        navbar.classList.add('scrolled')
        console.log('scrolled!!!')


        

        if (innerWidth > 999) {

            links.forEach(link => {
                link.style.color = '#000000'
            })

        }

    } else {
        navbar.classList.remove('scrolled')

        logo.style.color = '#d1d1d1'

        // links.forEach(link => {
        //     link.style.color = '#d1d1d1'
        // })
    }
}

window.addEventListener('scroll', debounce(() => {
    handleScroll()
}, 10))