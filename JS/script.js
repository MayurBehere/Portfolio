// NightMode 
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})



// Toggle Style Switcher

const styleSwitcherToggle= document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("Click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
});

// theme color
const alternativeStyles =document.querySelector(".alternate-style");
function setActiveStyle(colors){

        alternativeStyles.forEach((style) =>{
            if(colors===style.getAttribute("title")){
                style.removeAttribute("disabled");
            }
            else{
                style.setAttribute("disabled","true");
            }
        })
}