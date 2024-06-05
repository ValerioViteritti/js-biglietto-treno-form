/*Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere - Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole: - il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/

const priceKm = 0.21;

const buttonSend = document.querySelector(".send");
// 1 - Chiedere il nome del passeggero

const nameUser = document.querySelector(".nameUser");

// 2 - chiedere il numero di chilometri che vuole percorrere

const numKm = document.querySelector(".km");

// 3 - chiedere l’età del passeggero
const ageUser = document.querySelector(".ageUser");

    

// 4 - funzione bottone
buttonSend.addEventListener("click",
    function (e) {
        e.preventDefault();
        let inputValueA = nameUser.value;
        let inputValueB = numKm.value;
        let inputValueC = ageUser.value;

        // console punti 1 - 2 - 3.
        console.log(inputValueA, inputValueB, inputValueC);







        // 3 - calcolare il prezzo totale del viaggio

    // 3.1 - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    let totalPrice = priceKm * numKm.value;
    let totalPriceX = (Math.round(totalPrice * 100) / 100).toFixed(2);

        // console punti 3.1
        console.log("Il prezzo del biglietto è: ", totalPrice, "€" );
        console.log("Il prezzo del biglietto arrotondato è: ", totalPriceX, "€" );

    // 3.2 - va applicato uno sconto del 20% per i minorenni

    let totalPrice20 = (priceKm * numKm.value) /100 * 80;
    let totalPrice20X = (Math.round(totalPrice20 * 100) / 100).toFixed(2);

        // console punti 3.2
        console.log("Il prezzo del biglietto con lo sconto del 20% riservato agli under18 è: ", totalPrice20, "€" );
        console.log("Il prezzo del biglietto con lo sconto del 20% riservato agli under18 arrotondato è: ", totalPrice20X, "€" );

    // 3.3 - va applicato uno sconto del 40% per gli over 65

    let totalPrice40 = (priceKm * numKm.value) /100 * 60;
    let totalPrice40X = (Math.round(totalPrice40 * 100) / 100).toFixed(2);

        // console punti 3.3
        console.log("Il prezzo del biglietto con lo sconto del 40% riservato agli over65 è: ", totalPrice40, "€" );
        console.log("Il prezzo del biglietto con lo sconto del 40% riservato agli over65 arrotondato è: ", totalPrice40X, "€" );

// 4 - Risultato a schermo

let finalPrice;

    if (ageUser.value <= 17){
        finalPrice = totalPrice20X;

    } else if (ageUser.value >= 65){
        finalPrice = totalPrice40X;

    } else {
        finalPrice = totalPriceX;
    }


document.getElementById("xxx").innerHTML =  finalPrice + " €";

document.getElementById("ticketName").innerHTML =  nameUser.value ;
        
        
    }
);









    