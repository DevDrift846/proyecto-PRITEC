// script.js

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var a = 0

document.getElementById("btnInfo").addEventListener("click", function(){
    alert("Información sobre peritajes de vehículos: Aqui puedes encontrar todo lo necesario para evaluar tu vehiculo.")
})