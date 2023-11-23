import _ from "underscore";
import { crearDeck } from "../usecases/create-deck";
import { pedirCarta  } from "../usecases/pedir-carta";
import { valorCarta } from "../usecases/valor-carta";

(() => {
  "use strict";

  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];
  
  let puntosJugador = 0,
    puntosComputadora = 0;
  
  const btnPedir = document.querySelector("#btnPedir"),
    btnNuevo = document.querySelector("#btnNuevo"),
    divCartasDeterner = document.querySelector("#btnDetener");
  
  
  //REferencias del HTML
  
  
  const divCartasComputadora = document.querySelector("#computadora-cartas"),
    divCartasJugador = document.querySelector("#jugador-cartas"),
    puntosHtml = document.querySelectorAll("small");
  
    deck = crearDeck(tipos, especiales);

  //turno computadora
  
  const turnoComputadora = (puntosMinimos) => {
    do {
      const carta = pedirCarta(deck);
      puntosComputadora = puntosComputadora + valorCarta(carta);
      puntosHtml[1].innerText = puntosComputadora;
  
      const imgCarta = document.createElement("img");
      imgCarta.src = `assets/cartas/${carta}.png`;
  
      console.log(imgCarta);
      divCartasComputadora.append(imgCarta);
      imgCarta.classList.add("carta");
  
      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora < puntosMinimos && puntosMinimos < 21);
    {
    }
  
    alert(
      puntosMinimos > 21
        ? "Computadora Gana"
        : puntosComputadora === puntosMinimos
        ? "Empate"
        : puntosComputadora > 21
        ? "Jugador Gana"
        : "Computadora Gana"
    );
  };
  
  //Eventos
  
  btnNuevo.addEventListener("click", () => {
    const reset = window.confirm("Comenzar de Nuevo?");
    if (reset === true) {
      location.reload("Pulse Aceptar para Continuar");
    } else {
      window.alert("Pulse Aceptar para Continuar");
    }
  });
  
  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  });
  
  btnPedir.addEventListener("click", function () {
    const carta = pedirCarta(deck);
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHtml[0].innerText = puntosJugador;
    console.log(puntosJugador);
  
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    divCartasJugador.append(imgCarta);
    imgCarta.classList.add("carta");
  
    if (puntosJugador > 21) {
      // window.alert("Lo siento mucho,perdiste  Gana COMPUTADORA")
  
      btnDetener.disabled = true;
      btnPedir.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      // window.alert("21, Genial!")
      btnDetener.disabled = true;
      btnPedir.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });
  

})();
