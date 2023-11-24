import _ from "underscore";
import { crearDeck, pedirCarta, valorCarta,turnoComputador,crearCartaHtml } from "../usecases";

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
    turnoComputadora(puntosJugador, puntosHtml[1], divCartasComputadora, deck);
  });

  btnPedir.addEventListener("click", function () {
    const carta = pedirCarta(deck);
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHtml[0].innerText = puntosJugador;
    console.log(puntosJugador);

    const imgCarta = crearCartaHtml(carta)

    if (puntosJugador > 21) {
      // window.alert("Lo siento mucho,perdiste  Gana COMPUTADORA")

      btnDetener.disabled = true;
      btnPedir.disabled = true;
      turnoComputadora(
        puntosJugador,
        puntosHtml[1],
        divCartasComputadora,
        deck
      );
    } else if (puntosJugador === 21) {
      // window.alert("21, Genial!")
      btnDetener.disabled = true;
      btnPedir.disabled = true;
      turnoComputadora(
        puntosJugador,
        puntosHtml[1],
        divCartasComputadora,
        deck
      );
    }
  });
})();
