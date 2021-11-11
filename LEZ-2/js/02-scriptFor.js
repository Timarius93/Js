var punteggi = [24,32,11,50];

//leggo l'array con un ciclo for
for(var i=0; i<punteggi.length; i++){
    console.log('round '+1+' punteggio: ' + punteggi[i]);
}

/////////////////////////////////////////////////////////////

var elDemo = document.getElementById('demo');
var msg ='';

for(var i=0; i<punteggi.length; i++){
    msg += 'Round ' + (i + 1) + ' punteggio totalizzato: ' + punteggi[i] + '<br>';

    if(punteggi[i] < 25){
        msg += 'potevi fare meglio qua, punteggio inferore a 25 <br>';
    }
}

elDemo.innerHTML = msg;

//FOR OF
for(var i of punteggi){
    console.log("Punteggio: " + i)
}
//nel for of, l'iteratore i, va a prendere la posizione dell'array e lo memorizza
//permettendo di stamparlo/usarlo direttamente

///////////////////////////////////////////////////////////////////

//FOR IN ottimizzato per oggetti, legge le prop dato che non sono enumerabili
var utente = {
    nome: 'gianni',
    pass: '1234',
    add: 'piazza carducci'
}

for (var proprietà in utente){
    console.log(proprietà + ': ' + utente[proprietà]);
}