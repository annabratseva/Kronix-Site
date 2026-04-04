export const bookCallFunc = () => {
    const bookACall = document.querySelector(".green-button--smaller")
    const callMenu = document.querySelector(".book-call")
    const closeMenu = document.querySelector(".book-call__close")
    

    bookACall.addEventListener("click", () => {
        callMenu.classList.add("showBook")
    })

    closeMenu.addEventListener("click", () => {
        callMenu.classList.remove("showBook")
    })

    
}


