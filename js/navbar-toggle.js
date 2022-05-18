const navbar = document.querySelector('.header')
const logo = document.querySelector('.logo')
const links = document.querySelectorAll('#nav-menu ul li a')

handleScroll()

window.addEventListener('scroll', () => {

    handleScroll()

})

function handleScroll() {
    const {
        scrollTop,
        innerWidth
    } = document.documentElement

    const isScroll = scrollTop <= 90

    if (isScroll) {
        navbar.style.background = 'none'
        navbar.style.boxShadow = 'none'
        navbar.style.paddingTop = '30px'

        logo.style.color = '#000000'

        if (innerWidth > 999) {

            links.forEach(link => {
                link.style.color = '#000000'
            })

        }

    } else {
        navbar.style.background = '#0D0C22'
        navbar.style.paddingTop = '10px'

        logo.style.color = '#d1d1d1'

        links.forEach(link => {
            link.style.color = '#d1d1d1'
        })
    }
}