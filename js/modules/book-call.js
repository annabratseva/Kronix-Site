export const bookCallFunc = () => {
    const bookACall = document.querySelector(".green-button--smaller")
    const callMenu = document.querySelector(".book-call")
    const closeMenu = document.querySelector(".book-call__close")
    const email = document.querySelector(".book-call__item[name='email']")
    const number = document.querySelector(".book-call__item[name='number']")
    const bookTitle = document.querySelector(".book-call__title")
    

    bookACall.addEventListener("click", () => {
        callMenu.classList.add("showBook")
    })

    closeMenu.addEventListener("click", () => {
        callMenu.classList.remove("showBook")
    }) 

    
}


