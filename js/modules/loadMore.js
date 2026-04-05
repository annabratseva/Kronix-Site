export const LoadMore_HelpWith = () => {
    const cardsContainer = document.querySelector(".capabilities__text-cards-inner")
    const button = document.querySelector(".capabilities__button")

    const dataSets = [
    [
        "Web design & UI",
        "Social media visuals",
        "Infographics",
        "Design system",
        "Email design",
        "Stationery",
        "Icons",
        "Packaging & merch",
        "Signage",
        "Brochures",
        "Logos & branding",
        "Digital ads",
        "Wireframes"
    ],
    [
        "3D Design",
        "Motion Graphics",
        "Landing Pages",
        "Prototyping",
        "Brand Strategy",
        "Illustrations",
        "Typography",
        "UX Research",
        "Interaction Design",
        "Art Direction",
        "Visual Identity",
        "Content Design",
        "Creative Direction"
    ]
    ]

    let currentSet = 0 // сет массива дата сетс

    const renderCards = () => {
    cardsContainer.innerHTML = ""

    dataSets[currentSet].forEach(text => {
        const p = document.createElement("p")
        p.classList.add("capabilities__text-card")
        p.textContent = text
        cardsContainer.appendChild(p)
    })
    }

    button.addEventListener("click", () => {
    currentSet = (currentSet + 1) % dataSets.length
    renderCards()
    })
}

export const LoadMore_Posters = () => {
    const buttonBlack = document.querySelector(".black-text__button")
    const posterColumns = document.querySelectorAll(".beautiful-w__pictures-column")

    const posterSets = [
        ["../img/poster4(2).png","../img/poster5(2).png","../img/poster6(2).png"],
        ["../img/poster7(3).png","../img/poster8(3).png","../img/poster9(3).png"],
        ["../img/poster1(1).png","../img/poster2(1).png","../img/poster3(1).png"],
        ["../img/poster10(4).png","../img/poster11(4).png","../img/poster12(4).png"]
    ]
    
    let currentSet = 0

    buttonBlack.addEventListener("click", () => {

    currentSet = (currentSet + 1) % posterSets.length
    const newPosters = posterSets[currentSet]

    posterColumns.forEach((col, colIndex) => {
      const imgs = col.querySelectorAll("img")
      imgs.forEach((img, i) => {
        img.src = newPosters[i % newPosters.length]
      })
    })
  })
}
  



  





