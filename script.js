let burger=document.querySelector(".burger")
let navbar=document.querySelector(".v-class-resp")
let cross =document.querySelector(".cross")
let rightNav =document.querySelector(".rightNav")
let icon =document.querySelector(".icon")



burger.addEventListener("click",()=>{
    navbar.style.display="flex"
    burger.style.display="none"
    cross.style.display="inline"
    rightNav.style.display="none"
    icon.style.display="none"
    
})

cross.addEventListener("click",()=>{
    navbar.style.display="none"
    burger.style.display="block"
    cross.style.display="inone"
    rightNav.style.display="flex"
    icon.style.display="flex"
    
})