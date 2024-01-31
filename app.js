let design = document.getElementById("design")
let text = document.getElementById("text")

window.addEventListener('mousemove', function(e){
   console.log(e.clientX) 
   if(e.clientX >= 500){
    design.classList.add("hide_div")
    }
    if(e.clientX >= 700){
        document.getElementById("text").style.color = "black";
    }
    
})