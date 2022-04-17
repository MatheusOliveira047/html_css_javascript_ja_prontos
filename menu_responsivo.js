let menuResponsivo = document.querySelector(".header")
let menuHambuguer = document.querySelector(".menu")
let fecharMenuAncoras = document.querySelectorAll(".nav-list li a")
menuHambuguer.addEventListener("click",()=>{
    menuHambuguer.classList.toggle("active")
    menuResponsivo.classList.toggle("active") 
})
fecharMenuAncoras.forEach((ancoras)=>{
    ancoras.addEventListener('click',()=>{
        menuHambuguer.classList.toggle("active")
        menuResponsivo.classList.toggle("active")
        ancoras.classList.toggle("active")
    })   
})
