import _ from "underscore";

/**
 * esta funcion crea u nueevo deck
 * @param {Array<string>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"],
 * @param {Array<string>} TiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array}  retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, TiposEspeciales) => {
  
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error("TiposDeCarta es obligatorio  como un arreglo string");
  if (!TiposEspeciales || TiposEspeciales.length === 0)
    throw new Error("TiposEspeciales es obligatorio  como un arreglo string");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tiposDeCarta) {
    for (let esp of TiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  deck = _.shuffle(deck);

  return deck;
};
