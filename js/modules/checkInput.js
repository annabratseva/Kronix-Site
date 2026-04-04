export const faqCheck = () => {
    const inputText = document.querySelector(".FAQS__ask")
    const inputSend = document.querySelector(".FAQS__button-send")
    const alertText = document.querySelector(".FAQS__answer-text")

    inputSend.addEventListener("click", () => {
        const value = inputText.value

        if (value === "") {
            alertText.innerText = "You've submitted nothing! Type your question first."
        } else {
            alertText.innerText = "Your question has submitted successfully!"
            
            setTimeout(() => {
                inputText.value = ""
                inputText.placeholder = "Ask us what you want to know..."
                alertText.innerText = "We will answer your questions via email within 48 hours."
            }, 4000)
            
        }
    })
}

