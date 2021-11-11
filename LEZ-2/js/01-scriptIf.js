//operatori di confronto

var score1 = 70//punteggio primo round
var score2 = 150 //punteggio secondo round

var puntMax1= 75
var puntMax2 = 95

var risultato = (score1 + score2) > (puntMax1 + puntMax2);
//se usi un confronto in una variabile, ti rirotna un boolean true o false
//in questo caso tornerà true, perchè il totale supera il puntmax totale

if(risultato){
    console.log("bravo hai vinto, nerd")
}else{
    console.log("punteggio non sufficiente");
}

////////////////////////////////////////////////////////////////////

var risultato2 = (score1 >= puntMax1) && (score2 >= puntMax2);
//uso l'&&, se almeno 1 dei due punteggi non è >=, il risultato 2 è false
if(risultato2){
    console.log("bravo hai vinto, nerd")
}else{
    console.log("punteggio non sufficiente");
}

///////////////////////////////////////////////////////////////////////

var risultato3 = (score1 >= puntMax1) || (score2 >= puntMax2);
//torna true, perchè ALMENO 1 delle condizioni è superata
//usando l'operatore OR || basta una condizione per avere true
if(risultato3){
    console.log("bravo hai vinto, nerd")
}else{
    console.log("punteggio non sufficiente");
}

////////////////////////////////////////////////////////////////////////

//varie casistiche, se i vari punteggi variano, i messaggi cambiano
//mi sto annoiando, le so usare le condizioni, il mio problema
//è organizzarmi tra model view e controller, e richiamare le varie cose
if (score1 >= puntMax1 && score2 >= puntMax2){
    console.log("GG!");
}else if(score1 < puntMax1 && score2 >= puntMax2){
    console.log("fai schifo, allenati sul primo livello, pls");
}else if(score1 >= puntMax1 && score2 < puntMax2){
    console.log("ce la fai? madonna allenati sul secondo livello");
}else{
    console.log("io disinstallerei fossi in te..");
}

///////////////////////////////////////////////////////////////////////

//controllo con == e ===
//con == controlliamo se il numero sia uguale, e basta
//con === controlliamo che anche il TIPO sia uguale
var num1 = '4';
var num2 = 4;

//qui sono uguali, xk non controlla il tipo
if(num1==num2){
    console.log("i numeri sono uguali");
} else{
    console.log("numeri diversi");
}

//qui sono diversi, xk uno è una stringa
if(num1===num2){
    console.log("i numeri sono uguali");
} else{
    console.log("numeri diversi");
}

//funziona anche col not logico != e !==
if(num1!=num2){
    console.log("i numeri sono uguali");
} else{
    console.log("numeri diversi");
}

if(num1!==num2){
    console.log("numeri diversi");
} else{
    console.log("numeri uguali");
}

////////////////////////////////////////////////////////////////////////