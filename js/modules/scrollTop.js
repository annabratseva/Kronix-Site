const upButton = document.querySelector(".scrollTop")

export const scrollTop = () => {
    let count = window.scrollY
    if (count > 700) {
        upButton.classList.add("show")
    }else{
        upButton.classList.remove("show")
    }
}

export const buttonClick = () => {
    window.scrollTo(0,0)
}

window.addEventListener("scroll", scrollTop)
