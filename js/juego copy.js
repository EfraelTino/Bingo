
var rango = _.range(1, 91);
const cartonJugador = rango.slice(0, 90);
function crearCartonHTML() {
  var botones;
  let balotas = 90;

  // var segundo_p = document.getElementById(2).getElementsByTagName('p')[0];
  // segundo_p.textContent=2;
  // console.log(segundo_p);
  //var divbola = document.getElementById("bola").textContent;//let divbola = document.querySelector('#bola');
  // divbola.textContent = bola;

  for (let i = 1; i < balotas; i++) {
    botones = document.getElementById(i).getElementsByTagName('p')[0];
    botones.textContent = i;
  }
  /*
let parent = document.querySelector(`.${selector}`)
 
for(e of array)
{
  let divcarton = document.createElement('div');
  divcarton.className = 'numero n'+e;
  divcarton.textContent = e;
  //parent.appendChild(divcarton);
  //console.log(e);
}

/*
let bola = Math.floor(Math.random() * rango.length);
    bola = rango[bola];
 
_.pull(rango,bola);
let divbola = document.querySelector('#bola');
//var divbola = document.getElementById("bola").textContent;//let divbola = document.querySelector('#bola');
    divbola.textContent = bola;
let numero = document.querySelectorAll(`.n${bola}`);
 console.log(bola);
  for (var i = 0; i < numero.length; ++i) {
   numero[i].classList.add('tachado');
   
  }
  */
}

var totalJugador = 0;
//sacarBola();
crearCartonHTML();

function contarTachado() {
  //let totalJugador = document.querySelectorAll('.contenedor_numeros_rifa .tachado').length;

  if (totalJugador == 91)
    alert('FIN DEL JUEGO');

  totalJugador++;
  console.log(totalJugador);
}

function sacarBola() {
  if (totalJugador < 90) {
    let bola = Math.floor(Math.random() * rango.length);
    bola = rango[bola];
    //  console.log(bola);
    _.pull(rango, bola);
    let divbola = document.querySelector('#bola');
    divbola.textContent = bola;
    let numero = document.getElementById(`${bola}`);//document.querySelectorAll(`.n${bola}`);
    // console.log(numero);
    for (var i = 0; i < numero.length; ++i) {
      numero[i].classList.add('tachado');

    }
    contarTachado();
    cambiarImagens(bola);
  }else{
    alert("FIN DEL JUEGO");
  }

}
function cambiarImagens(id) {

  // let imgs=document.getElementById("70");
  var segundo_p = document.getElementById(id).getElementsByTagName('img')[0];
  segundo_p.src = "img/14.png";
  //let imgs=document.querySelectorAll("fichas_contenedor");
  //console.log(segundo_p);
  /*
  for ( let img of imgs){
      img.addEventListener("click",function(){
         document.querySelector(".bolitas img").setAttribute("src","img/12.png");
       });
  }
  */
}