const menu = document.querySelector(".fa-bars");
const clos = document.querySelector(".fa-xmark");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const bgdiv = document.querySelector(".bgdiv");

// document.addEventListener("DOMContentLoaded" , function(){
//     sidebar.style.display = "none" 

// })

menu.addEventListener('click' , (e)=>{
    e.stopPropagation();
    overlay.classList.remove ("hidden")
    sidebar.classList.remove("hidden")

});


document.addEventListener("click" , (e)=>{
    if(! sidebar.contains(e.target) && !menu.contains(e.target)){
    sidebar.classList.add("hidden")
    overlay.classList.add("hidden")
}
})

clos.addEventListener('click' , ()=>{
    sidebar.classList.add("hidden")
    overlay.classList.add("hidden")

})

window.addEventListener("scroll" , ()=>{
    let scrollY = window.scrollY
    let minWidth = 50
    let maxWidth = 85
    let progress = Math.min(scrollY / 500, 1)
    let newWidth = minWidth + (maxWidth - minWidth) * progress
    bgdiv.style.width = newWidth + "%"

})
