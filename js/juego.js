
var rango = _.range(1, 76);
const cartonJugador = rango.slice(0, 76);
function crearCartonHTML() {
  var botones;
  let balotas = 76;
  for (let i = 1; i < balotas; i++) {
    botones = document.getElementById(i).getElementsByTagName('p')[0];
    botones.textContent = i;
  }
}

var totalJugador = 0;
crearCartonHTML();

function contarTachado() {
  if (totalJugador == 76)
    alert('FIN DEL JUEGO');

  totalJugador++;
  console.log(totalJugador);

}


var bola;
var temBall;
function sacarBola() {
  if (totalJugador < 75) {
    bola = Math.floor(Math.random() * rango.length);
    bola = rango[bola];
    _.pull(rango, bola);
    bolaGrande(bola);
   
    let numero = document.getElementById(`${bola}`);
    for (var i = 0; i < numero.length; ++i) {
      numero[i].classList.add('tachado');
    
    }
    contarTachado();
    cambiarImagens(bola);
    bingo(bola);
  } else {
    alert("FIN DEL JUEGO");
  }

}
function bolaGrande(bola){
  var divbola = document.querySelector('#bola');
  divbola.textContent = bola;
}
function cambiarImagens(id) {
  var segundo_p = document.getElementById(id).getElementsByTagName('img')[0];
  segundo_p.src = "img/14.png";
}

function bingo(bola) {
  var Letra = "B";
  // bola=5;
  if (bola >= 0 && bola <= 15) {
    Letra = "B";
  }
  if (bola >= 16 && bola <= 30) {
    Letra = "I";
  }
  if (bola >= 31 && bola <= 45) {
    Letra = "N";
  }
  if (bola >= 46 && bola <= 60) {
    Letra = "G";
  } 
  if(bola>=61 && bola<=90){
    Letra = "O";
  }
  var letraP = document.getElementById("letra");
  var balotas = document.getElementById(Letra).getElementsByTagName('h3')[0];
  
  // Traigo las balotas
  var balotas1= document.getElementById('letraB');
  var balotas2= document.getElementById('letraI');
  var balotas3= document.getElementById('letraN');
  var balotas4= document.getElementById('letraG');
  var balotas5= document.getElementById('letraO');

  switch (Letra){
    case 'B':balotas1.style.display="flex"; mostrarLetra('B', balotas);break;
    case 'I':balotas2.style.display="flex";break;
    case 'N':balotas3.style.display="flex";break;
    case 'G':balotas4.style.display="flex";break;
    case 'O':balotas5.style.display="flex";break;
  }
  function mostrarLetra (letra, valote){
  //var clonarBalota= balotas1.cloneNode(true);
 // document.appendChild(clonarBalota);
    //const letras ='BINGO';
   // const mesclarLetra=letras[Math.floor(Math.random()*letras.length)];
  }
  letraP.textContent=Letra;
  balotas.textContent = bola;
}

var MoverFicha=document.getElementById('ficha_ganador');
const perfectFrameTime = 1000 / 60;
let deltaTime = 0;
let lastTimestamp = 0;
var timSeg=0;
var girar=false;

function start() {
  requestAnimationFrame(update);
}
function update(timestamp) {
  requestAnimationFrame(update);
  deltaTime = (timestamp - lastTimestamp) / perfectFrameTime;
  lastTimestamp = timestamp;
 
  timSeg++;
  
  lastTimestamp=0;
  if(girar){
    MoverFicha.style.transform = 'rotate('+timSeg*16+'deg)';
    //MoverFicha.style.left = timSeg+'px';
    MoverFicha.style.scale=1;
    console.log(timSeg);
    bolaGrande("");
  
  }
  if(timSeg>179){
    girar=false;
    timSeg=0;
    MoverFicha.style.scale=0.8;
    bolaGrande(bola);
    
  }
  
 }


start();
window.addEventListener("keydown", (event) => {

  let key = event.key
  
  if (key == "p") {
    sacarBola();
      document.getElementById('letraB').style.flexDirection = 'row';
      console.log("Nueva balota");
      girar=true;
  }

  else if (key == "b") {
      console.log("Bingo");
      girar=false;
  }

})