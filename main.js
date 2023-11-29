const cookieButton = document.getElementById("cookieButton");
const fajitaButton = document.getElementById("fajitaButton");
const potatoButton = document.getElementById("potatoButton")

cookieButton.addEventListener("mouseover", ()=>{
    cookieButton.classList.remove("cookieButton")
    cookieButton.classList.add("buttonPressed")
    cookieButton.textContent = "Chocolate chips cookies"
})
cookieButton.addEventListener("mouseleave", ()=>{
    cookieButton.classList.add("cookieButton");
    cookieButton.classList.remove("buttonPressed")
    cookieButton.textContent = ""
})
cookieButton.addEventListener("mousedown", ()=>{
    cookieButton.classList.add("cookieButton");
    cookieButton.classList.remove("buttonPressed")
    cookieButton.textContent = ""
    window.location.href = "Recipes/cookies.html"
})

fajitaButton.addEventListener("mouseover", ()=>{
    fajitaButton.classList.remove("fajitaButton")
    fajitaButton.classList.add("buttonPressed")
    fajitaButton.textContent = "Fajitas"
})
fajitaButton.addEventListener("mouseleave", ()=>{
    fajitaButton.classList.add("fajitaButton");
    fajitaButton.classList.remove("buttonPressed")
    fajitaButton.textContent = ""
})
fajitaButton.addEventListener("mousedown", ()=>{
    window.location.href = "Recipes/fajitas.html"
    fajitaButton.classList.add("fajitaButton");
    fajitaButton.classList.remove("buttonPressed")
    fajitaButton.textContent = ""
})

potatoButton.addEventListener("mouseover", ()=>{
    potatoButton.classList.remove("potatoButton")
    potatoButton.classList.add("buttonPressed")
    potatoButton.textContent = "Baked potatoes"
})
potatoButton.addEventListener("mouseleave", ()=>{
    potatoButton.classList.add("potatoButton");
    potatoButton.classList.remove("buttonPressed")
    potatoButton.textContent = ""
})

potatoButton.addEventListener("mousedown", ()=>{
    potatoButton.classList.add("potatoButton");
    potatoButton.classList.remove("buttonPressed")
    potatoButton.textContent = ""
    window.location.href = "Recipes/ovenRoastedPotatoes.html"
})