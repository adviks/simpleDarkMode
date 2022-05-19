let btn = document.getElementById("btn");
let container = document.getElementById("cont")
btn.addEventListener("click", function(){
    container.classList.toggle("dark");
    btn.classList.toggle("btn-dark");
    let check = btn.innerText

    if(check == "Day"){
        btn.innerText = "Night"
    }else{
        btn.innerText = "Day"
    }
})