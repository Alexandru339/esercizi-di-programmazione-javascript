/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/

// Esempio 1
var numero_di_gatti = 44;
var gatti_per_fila = 6;
var numero_di_file = Math.ceil(numero_di_gatti/gatti_per_fila);
var gatti_che_dovrebbero_essere_presenti = gatti_per_fila*numero_di_file;
console.log(gatti_che_dovrebbero_essere_presenti - numero_di_gatti);

// Esempio 2
var tot_gatti = 44;
var file_gatti = 6;
console.log(((file_gatti*(Math.ceil(tot_gatti/file_gatti)))-tot_gatti));
