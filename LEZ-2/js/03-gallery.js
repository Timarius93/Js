var elFoto = document.getElementById('foto');
var locandine = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png"
];

var contatore = 0;

var primaImg = "<img id='miaImg' src='" + locandine[0] + " ' />"

elFoto.innerHTML = primaImg;
//ora mi sparo
function ruotaFoto(){
    ++contatore;
    
    if(contatore>=locandine.length){
        contatore = 0;
    }

    document.getElementById('miaImg').src = locandine[contatore];
}