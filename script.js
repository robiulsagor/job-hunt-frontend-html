const navBtn = document.querySelector("#menu_btn")
const nav = document.querySelector("nav")

navBtn.addEventListener("click", () => {
    nav.classList.toggle("open")
})

window.onscroll = () => {
    nav.classList.remove("open")
}