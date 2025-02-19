
var typed = new Typed(".text", {
    strings: ["Full-stack web development", "Artificial Intelligence", "Cloud computing", "Network engineering"],
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})