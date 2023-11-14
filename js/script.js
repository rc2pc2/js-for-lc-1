

const wrapperElement = document.querySelector('div.wrapper');


for ( let i = 1; i <= 44 ; i++){
    const cardElement = document.createElement('div');
    cardElement.className = 'card';

    const headingCardElement = document.createElement('h2');
    headingCardElement.innerHTML = i;

    cardElement.appendChild(headingCardElement);
    wrapperElement.appendChild(cardElement);
}

// ? prima esecuzione: inizializzo la variabile let i = 0
// ? prima iterazione : i rispetta la condizione iterativa? (ovvero 0 <= 4?)
    // ? si => eseguo console.log(0);
    // ? operazione iterativa : i = i + 1 ====> i = 0 + 1 = 1
// # seconda iterazione : i rispetta la condizione iterativa? (ovvero 1 <= 4?)
    // # si => eseguo console.log(1);
    // # operazione iterativa : i = i + 1 ====> i = 1 + 1 = 2
// ? terza iterazione : i rispetta la condizione iterativa? (ovvero 2 <= 4?)
    // ? si => eseguo console.log(2);
    // ? operazione iterativa : i = i + 1 ====> i = 2 + 1 = 3
// # quarta iterazione : i rispetta la condizione iterativa? (ovvero 3 <= 4?)
    // # si => eseguo console.log(3);
    // # operazione iterativa : i = i + 1 ====> i = 3 + 1 = 4
// ? quinta iterazione : i rispetta la condizione iterativa? (ovvero 4 <= 4?)
    // ? si => eseguo console.log(4);
    // ? operazione iterativa : i = i + 1 ====> i = 4 + 1 = 5
// # sesta iterazione : i rispetta la condizione iterativa? (ovvero 5 <= 4?)
    // # NO, esco dal ciclo e mi ritrovo a riga 7
