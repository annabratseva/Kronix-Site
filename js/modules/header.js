const mobileMenu = document.querySelector(".header__nav")
const menuLinks = document.querySelectorAll(".header__link")

export const openMenu = () => {
    mobileMenu.classList.toggle("active")
}

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
    })
})


