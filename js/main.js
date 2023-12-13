const elListBtn = document.querySelector(".btn")
const elListKun = document.querySelector(".kun")

elListBtn.addEventListener('click', () => {
    elListKun.classList.toggle("tun")
})