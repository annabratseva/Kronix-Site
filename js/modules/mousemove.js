export const mouseMoveTwo = () => {
  const title = document.querySelector(".hero-block__text-cont")
  const banner = document.querySelector(".banner__inner-cont")
  const greenButtonNew = document.querySelector(".green-button--new")

  const items = [
    { el: title, speedX: 30, speedY: 20 },
    { el: banner, speedX: 50, speedY: 50 },
    { el: greenButtonNew, speedX: 40, speedY: 40}
  ]

  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5)
    const y = (e.clientY / window.innerHeight - 0.5)

    items.forEach(item => {
      const moveX = x * item.speedX
      const moveY = y * item.speedY

      item.el.style.transform = `translate(${moveX}px, ${moveY}px)`
    })
  })
}