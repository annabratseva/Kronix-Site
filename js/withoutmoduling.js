const openBook = () => {
    const callMenu = document.querySelector(".book-call")
    callMenu.classList.add("showBook")
}

const bookCallCookie = () => {
    const email = document.querySelector(".book-call__item[name='email']")
    const number = document.querySelector(".book-call__item[name='number']")
    const bookTitle = document.querySelector(".book-call__title")
    const callMenu = document.querySelector(".book-call")

    document.cookie = `username=${email.value}; max-age=${24*60*60*1000}`
    document.cookie = `number=${number.value}; max-age=${24*60*60*1000}`

    if (document.cookie){
        bookTitle.innerText = 'Your data is successfully registered!'

        setTimeout(() => {
            callMenu.classList.remove("showBook")
        }, 2000)
    }
}

const loginMenu = document.querySelector(".login-menu")
const login = document.querySelector(".login-menu__item[name='login']")
const email = document.querySelector(".login-menu__item[name='email']")
const password = document.querySelector(".login-menu__item[name='password']")
const passwordConf = document.querySelector(".login-menu__item[name='passwordConf']")
const loginText = document.querySelector(".login-menu__text")
const loginInfo = document.querySelector(".header__link--user")


const LoginData = () => {
    loginMenu.classList.add("showBook")
}

const CloseLogin = () => {
    loginMenu.classList.remove("showBook")
}

const SignUp = () => {
    if (password.value != passwordConf.value){
        loginText.innerText = "Your passwords are not similar!"
        loginText.style.color = "#B9FD50"
    }else{
        document.cookie = `login=${login.value}; max-age=${24*60*60*1000}`
        document.cookie = `number=${email.value}; max-age=${24*60*60*1000}`

        loginText.innerText = `Welcome! User: ${login.value}`

        setTimeout(() => {
            loginMenu.classList.remove("showBook")
        }, 2000)

        loginInfo.innerText = `User: ${login.value}`
    }

}

// const FAQSsection = document.querySelector(".FAQS")
// const FAQSanswer = document.querySelector(".FAQS__desc")
// const FAQSbutton = document.querySelector(".FAQS__icon")

// const openFAQS = () => {
//     FAQSanswer.classList.toggle("showFAQS")
//     FAQSbutton.classList.toggle("active")
//     FAQSsection.style.padding = '80px 0 400px 0'
// }

const openFAQS = (btn) => {
    const FAQSsection = btn.closest(".FAQS")
    const card = btn.closest(".FAQS__card")

    const FAQSanswer = card.querySelector(".FAQS__desc")
    const FAQSbutton = card.querySelector(".FAQS__icon")

    FAQSanswer.classList.toggle("showFAQS")
    FAQSbutton.classList.toggle("activeFAQS")
}




