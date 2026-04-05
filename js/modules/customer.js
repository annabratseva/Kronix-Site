export const customerFunc = () => {
    const title = document.querySelector(".customer__title")
    const subtitle = document.querySelector(".customer__subtitle")
    const image = document.querySelector(".customer__image")
    const nextButton = document.querySelector(".customer__swipe-button--right")
    const prevButton = document.querySelector(".customer__swipe-button--left")

    const newCards = [
        {
            title: "Kornix is an agency where you certainly get a good result. A high service!",
            subtitle: "I wasn't sure at first, because it was my first ever experince, but it was totally worth it! I'm remained satisfied with the product and the company service overall.",
            image: "../img/man-customer2.png"
        },
        {
            title: "I absolutely adore the company, and thanks to Kronix I have a succesfull design!",
            subtitle: "I definitely will use in the future and I hope that the company continues to provide such a high-quality work.",
            image: "../img/man-customer4.jpg"
        },
        {
            title: "Kornix is the best digital agency i have ever seen! Highly Recommended!",
            subtitle: "I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
            image: "../img/man-customer.png"
        }
    ]

    let current = 0

    const renderCard = () => {
        title.textContent = newCards[current].title
        subtitle.textContent = newCards[current].subtitle
        image.src = newCards[current].image
    }

    nextButton.addEventListener("click", () => {
        current = (current + 1) % newCards.length
        renderCard()
    })

    prevButton.addEventListener("click", () => {
        current = (current - 1 + newCards.length) % newCards.length
        renderCard()
    })
    
}