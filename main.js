document.addEventListener('DOMContentLoaded',function (){
    const form = document.querySelectorAll(" .form")[0];
  form.addEventListener("submit",function(event) {
    event.preventDefault();
    const nombre = document.querySelectorAll(".nombres")[0].value;
    const apellidos = document.querySelectorAll(".apellidos")[0].value;
    const prom1 = document.querySelectorAll(".prom1")[0].value;
    const prom2 = document.querySelectorAll(".prom2")[0].value;
    const prom3 = document.querySelectorAll(".prom3")[0].value;
    const promfinal = 0.2*prom1+0.3*prom2+0.5*prom3;

    const mensajeTexto = document.querySelectorAll(".mensaje-texto")[0];
    mensajeTexto.innerHTML = `Tu promedio final es ${promfinal}`;

  });

});
