let design = document.getElementById("design")
let text = document.getElementById("text")

window.addEventListener('mousemove', function(e){
    
   if(e.clientX >= 500){
    design.classList.add("hide_div")
    }
    if(e.clientX >= 700){
        document.getElementById("text").style.color = "black";
    }
    
})
const navLinks = document.querySelector('#navLinks');
const navToggleBtn = document.querySelector('#navToggleBtn');

navToggleBtn.addEventListener ('click', () => { 
navLinks.classList.toggle ('active');
});