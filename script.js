String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 



const palabras = ['casa','perro','gato','hormiga']; //agrego cuatro palabras al ahorcado
const palabra = palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones = palabra.replace(/./g,"_ ");

let contadorFallos = 0;
document.querySelector('#output').innerHTML = palabraConGuiones;
document.querySelector('#calcular').addEventListener('click',() => 
{
    const letra = document.querySelector('#letra').value;
    let haFallado = true;
    for(const i in palabra){
        if(letra == palabra[i]) {
           palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
           haFallado = false;
        };
    };
  
    if(haFallado){
        contadorFallos++;
        document.querySelector('#ahorcado').style.backgroundPosition = -(264*contadorFallos) + 'px 0';
        if (contadorFallos ==4){
            alert("PERDISTE EL JUEGO");
        };
    }else{
        if(palabraConGuiones.indexOf('_')<0){
            alert("VICTORIA");
        };
    };
 


    document.querySelector('#output').innerHTML = palabraConGuiones;
    document.querySelector('#letra').value = "";
    document.querySelector('#letra').focus();

});