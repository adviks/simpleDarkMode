let btn = document.getElementById("btn");
let container = document.getElementById("cont")
btn.addEventListener("click", function(){
    document.body.classList.toggle("dark");
    btn.classList.toggle("la-sun");
})