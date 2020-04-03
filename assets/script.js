console.log("running")

const mobileNav = document.querySelector('#mobile-nav')

let hidden = true

const cycleNav = () => {
    if (hidden) {
        mobileNav.style.display = 'block'
    }
    else {
        mobileNav.style.display = 'none'
    }
    hidden = !hidden
}