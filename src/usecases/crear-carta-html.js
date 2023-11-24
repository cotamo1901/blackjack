/**
 *
 * @param {StringConstructor} carta
 * @returns {HtmlImageElement} imagen de retorno
 */

export const crearCartaHtml =(carta)=>{
    if (!carta) throw new Error("La carta es un argumento obligatorio");

    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    divCartasComputadora.append(imgCarta);
    return imgCarta;
}