function actualizarHora() {
    var fecha = new Date(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

        if ((horas >= 0)&&(horas <= 9)){ 
            horas="0"+horas; 
        }
        if ((minutos >= 0)&&(minutos <= 9)){ 
        minutos="0"+minutos; 
        }
    
        if ((segundos >= 0)&&(segundos <= 9)){ 
        segundos="0"+segundos; 
        }
        
    var pHoras = document.getElementById('horas').innerHTML = horas +":";
    var pMin = document.getElementById('minutos').innerHTML = minutos +":";
    var pSegundos = document.getElementById('segundos').innerHTML = segundos;
}

var intervalo = setInterval(actualizarHora,1000);