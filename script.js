const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const audio = document.getElementById("audio-capitulo");
const textoCapitulo = document.getElementById('texto-capitulo');
const todosCapitulos = 10;

console.log(botaoPlayPause);
let lendo = false; //0=false
let capituloAtual =1;

//console.log(audio);
function ler(){
console.log('Clicou!'); 
audio.play();
lendo = true; 
console.log ('Deu play!');
botaoPlayPause.classList.add('tocando');
}
function pararLeitura(){
console.log('Clicou!'); 
audio.pause(); 
lendo = false;
console.log ('Parou!');
botaoPlayPause.classList.remove('tocando');
}

function lerOuParar(){
    if (lendo === true){ //1 = true
        pararLeitura();
    } else {
        ler();
    }
}
// audio.play();
function proximoCapitulo(){
    pararLeitura();
if (capituloAtual < todosCapitulos){
    capituloAtual = capituloAtual + 1;
} else {
    capituloAtual = 1;
}
audio.src = "./audios/" + capituloAtual + ".mp3";
textoCapitulo.innerText = "Capitulo " + capituloAtual;
}
function capituloAnterior(){
    pararLeitura();
if (capituloAtual === 1){
    capituloAtual = todosCapitulos;
}else {
    capituloAtual = capituloAtual -1;
}
audio.src = "./audios/" + capituloAtual + ".mp3";
textoCapitulo.innerText = "Capitulo " + capituloAtual;
}
botaoPlayPause.addEventListener('click', lerOuParar);
botaoProximoCapitulo.addEventListener ('click', proximoCapitulo);
botaoCapituloAnterior.addEventListener ('click', capituloAnterior);