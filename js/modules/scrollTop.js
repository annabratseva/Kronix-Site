const upButton = document.querySelector(".scrollTop")
const heroCont = document.querySelector(".hero-block__text-cont")
const star1 = document.querySelector(".hero-block__svg-star")
const star2 = document.querySelector(".hero-block__svg-star2")
const star3 = document.querySelector(".hero-block__svg-star3")

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

export const scrollFade = () => {
    let count = window.scrollY
    if(count > 300){
        star3.style.transform = `translateY: 80px`
        star3.style.opacity = '0'
        star2.style.transform = `translateY: 80px`
        star2.style.opacity = '0'
        star1.style.transform = `translateY: 80px`
        star1.style.opacity = '0'
        heroCont.style.transform = `translateY: 100px`
        heroCont.style.opacity = '0'
    }else{
        star1.style.transform = `translateY: 0px`
        star1.style.opacity = '1'
        star3.style.transform = `translateY: 0px`
        star3.style.opacity = '1'
        star2.style.transform = `translateY: 0px`
        star2.style.opacity = '1'
        heroCont.style.transform = `translateY: 0px`
        heroCont.style.opacity = '1'
    }
}

window.addEventListener("scroll", scrollFade)
