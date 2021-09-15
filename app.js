'use strict';

const switcher = document.querySelector(".boton");

switcher.addEventListener("click", function() {
    
    let className = document.body.className;

    if (className == "tema-claro") {
        document.body.classList.remove('tema-claro');
        document.body.classList.add('tema-oscuro');
        this.textContent = "Dark";
    } else {
        document.body.classList.remove('tema-oscuro');
        document.body.classList.add('tema-claro');
        this.textContent = "Light";
    }

    console.log("Tema actualizado a " + className);
})