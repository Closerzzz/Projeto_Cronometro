
var hora = 0;
var minuto = 0;
var segundo = 0;

var tempo = 10;
var cron;



function start(){
    cron = setInterval(() => { timer(); }, tempo);
}

function pause(){
    clearInterval(cron);
    
}

function stop(){
    clearInterval(cron);
    hora = 0;
    minuto = 0;
    segundo = 0;
    document.getElementById('counter').innerText = '00:00:00'
}

function timer(){

    segundo++;

    if(segundo == 60){
        segundo = 0;
        minuto++;
    
    if(minuto == 60){
        minuto = 0;
        hora++;
        }
    }

    var formato = (hora < 10 ? '0' + hora : hora) + ':' + (minuto < 10 ? '0' + minuto : minuto) + ':' + (segundo < 10 ? '0' + segundo : segundo);
    document.getElementById('counter').innerText = formato;
}