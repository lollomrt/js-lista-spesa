// 1. Definire la lista della spesa ed i suoi elementi (array)
const lista_spesa = ["pomodori", "insalata", "cetrioli", "ravanelli", "mais", "olio", "sale"]

// 2. Stampare la lista in pagina
// 2.1 Richiamare il contenitore html della lista
const list = document.querySelector(".lista-spesa")
let item = 0
// 2.2 Percorrere l'array tramite un ciclo while - se lista spesa include item --> stampa nell?html
while (item < lista_spesa.length){
    let listItem = document.createElement("li")
    listItem.innerText = lista_spesa[item]
    list.append(listItem)
    item++
}
// 2.3 iniettare il codice tramite javascript