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

    let currentSet = 0

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
    [
      [
        "https://img.freepik.com/free-photo/abstract-backdrop-pattern-illustration-decoration-design-curve-shape-generative-ai_188544-12865.jpg",
        "https://img.freepik.com/free-photo/abstract-psychedelic-papercut-background_23-2149303023.jpg",
        "https://png.pngtree.com/thumb_back/fh260/background/20220723/pngtree-abstract-fluid-shapes-color-background-image_1439051.jpg"
      ],
      [
        "https://img.freepik.com/free-photo/abstract-modern-geometry-exterior-architecture-abstract-business-interior-minimalism-ai_1258-184152.jpg",
        "https://img.freepik.com/photos-gratuite/fond-papercut-psychedelique-abstrait_23-2149303072.jpg",
        "https://i.pinimg.com/originals/ee/b0/ef/eeb0efc3599d063400a774143a2080ba.jpg"
      ],
      [
        "https://i.pinimg.com/originals/55/5a/05/555a053cc3b67d89517831c3bf69421e.jpg",
        "https://img.freepik.com/free-photo/minimal-podium-product-display-stand-pedestal-studio-gray-color-background-3d-rendering_56104-1752.jpg",
        "https://i.pinimg.com/736x/30/29/f9/3029f907333e929bb4dcbc08c1313fe8.jpg"
      ],
      [
        "https://i.pinimg.com/736x/e4/fa/23/e4fa233fe735bb4e3c286b288c0df4a5.jpg",
        "https://img.freepik.com/photos-gratuite/fond-papercut-psychedelique-abstrait_23-2149303072.jpg",
        "https://i.pinimg.com/originals/5d/f2/b4/5df2b469b559d7851a797da0bc951c49.jpg"
      ]
    ]
  ]

  let currentSet = 0

  buttonBlack.addEventListener("click", () => {
    currentSet = (currentSet + 1) % posterSets.length
    const newPosters = posterSets[currentSet]

    posterColumns.forEach((col, colIndex) => {
      const imgs = col.querySelectorAll("img")

      imgs.forEach((img, i) => {
        if (newPosters[colIndex]) {
          img.src = newPosters[colIndex][i]
        }
      })
    })
  })
}
  



  





