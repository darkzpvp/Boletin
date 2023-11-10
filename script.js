"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const notasLista = document.getElementById("notas-lista");
  const titulo = document.getElementById("titulo");
  const titulopromedio = document.getElementById("titulopromedio");
  const promedio = document.getElementById("promedio");
  const titulonotamasalta = document.getElementById("titulonotamasalta");
  const notamasalta = document.getElementById("notamasalta");
  const titulosuspenso = document.getElementById("titulosuspenso");
  const suspenso = document.getElementById("suspenso");
  const promediorespuesta = document.getElementById("promediorespuesta");
  const notamasaltarespuesta = document.getElementById("notamasaltarespuesta");
  const suspensorespuesta = document.getElementById("suspensorespuesta");
  const carganotas = document.getElementById("carganotas");
  const restablecer = document.getElementById("restablecer");

  const notas = [1, 3, 9, 8, 7, 5, 6, 8, 2];
// Función para deshabilitar botones. El classList se sincroniza también
  function deshabilitarBotones() {
    carganotas.disabled = true;
    restablecer.disabled = true;
    promedio.disabled = true;
    notamasalta.disabled = true;
    suspenso.disabled = true;

    carganotas.classList.add('boton-desactivado');
    restablecer.classList.add('boton-desactivado');
    promedio.classList.add('boton-desactivado');
    notamasalta.classList.add('boton-desactivado');
    suspenso.classList.add('boton-desactivado');
  }
// Función para habilitar botones. El classList se sincroniza también
  function habilitarBotones() {
    carganotas.disabled = false;
    restablecer.disabled = false;
    promedio.disabled = false;
    notamasalta.disabled = false;
    suspenso.disabled = false;

    carganotas.classList.remove('boton-desactivado');
    restablecer.classList.remove('boton-desactivado');
    promedio.classList.remove('boton-desactivado');
    notamasalta.classList.remove('boton-desactivado');
    suspenso.classList.remove('boton-desactivado');
  }
// Función para cargar notas. Recorre un array for each, y va creando listas
  function cargarNotas() {

    notas.forEach((nota) => {
      const li = document.createElement("li");
      li.textContent = nota;
      notasLista.appendChild(li);
    });

    // Deshabilita los botones correspondientes
    habilitarBotones();
    carganotas.disabled = true;
    carganotas.classList.add('boton-desactivado');
    
  }
//Restablecer hace que el textContent de todo sea nulo
  function restablecerFuncion() {
    notasLista.textContent = "";
    promediorespuesta.textContent = "";
    notamasaltarespuesta.textContent = "";
    suspensorespuesta.textContent = "";

    // Habilita solo el botón "Cargar Notas"
    deshabilitarBotones();
    restablecer.disabled = true;
    restablecer.classList.add('boton-desactivado');
    carganotas.disabled = false;
    carganotas.classList.remove('boton-desactivado');
  }

  function suspenderFuncion() {
    const puntuacionAprobacion = 5;
    const suspensos = notas.filter((nota) => nota < puntuacionAprobacion); //Busca las notas que sean inferiores a 5
    const notasSuspensas = suspensos.join(", "); // Los une con la coma
    suspensorespuesta.textContent = `${notasSuspensas}`; // Imprime
  }

  function promedioFuncion() {
    const promedioValue = notas.reduce((a, b) => a + b, 0) / notas.length; //Se usa la funcion reduce para el promedio
    const promedioDosCifras = promedioValue.toFixed(2); //Nos quedamos con dos decimales
    promediorespuesta.textContent = promedioDosCifras; //Imprime
  }

  function notaMasAltaFuncion() {
    const notaMasAltaValue = Math.max(...notas); //Nos quedamos con la nota mas alta usando max. (...) hace que nos quedemos con una sola nota
    notamasaltarespuesta.textContent = notaMasAltaValue; // Imprime
  }

  // Agrega delegación de eventos al contenedor de botones
  document.getElementById('contenedor-botones').addEventListener('click', function(e) {
    if (e.target.classList.contains('boton-operacion')) {
      switch (e.target.textContent) {
        case 'Suspender':
          suspenderFuncion();
          break;
        case 'Promedio':
          promedioFuncion();
          break;
        case 'Nota Más Alta':
          notaMasAltaFuncion();
          break;
      }
    }
  });

 
//AddEventListener con on Click
  restablecer.addEventListener("click", restablecerFuncion); //
  carganotas.addEventListener("click", cargarNotas);

  //Los titulos los defino aquí, y no en el HTML
  titulo.textContent = "Notas";
  titulopromedio.textContent = "Titulo promedio";
  titulonotamasalta.textContent = "Nota más alta";
  titulosuspenso.textContent = "Suspenso";

  

});
