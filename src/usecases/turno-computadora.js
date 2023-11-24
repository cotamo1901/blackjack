import { pedirCarta,valorCarta } from "./";

/**
 *
 * @param {Number} puntosMinimos Puntos minimos para que la computadora gane
 * @param {HTMLElement} elemento  Html para mostrar los puntos 
 * @param {HTMLElement} elemento  Html para mostrar los puntos 
 * @param {Array<String>} deck
 */

export const turnoComputadora = (puntosMinimos,puntosHtml,divCartasComputadora, deck =[]) => {
  if (!puntosMinimos) throw new Error("Puntos minimos son necesarios");
  if (!puntosHtml) throw new Error("Argumento puntosHTML es necesario");


  let puntosComputadora=0

  do {
    const carta = pedirCarta(deck);
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHtml.innerText = puntosComputadora;

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
