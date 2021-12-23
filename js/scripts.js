// reloj digital

var updateTime = function() {
    let currentDate = new Date(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(), 
        seconds = currentDate.getSeconds(),
        weekDay = currentDate.getDay(), 
        day = currentDate.getDate(), 
        month = currentDate.getMonth(), 
        year = currentDate.getFullYear();
 
    const weekDays = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sabado'
    ];
 
    document.getElementById('weekDay').textContent = weekDays[weekDay];
    document.getElementById('day').textContent = day;
 
    const months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];
 
    document.getElementById('month').textContent = months[month];
    document.getElementById('year').textContent = year;
 
    document.getElementById('hours').textContent = hours;
 
    if (minutes < 10) {
        minutes = "0" + minutes
    }
 
    if (seconds < 10) {
        seconds = "0" + seconds
    }
 
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
};
 
updateTime();
 
setInterval(updateTime, 1000);

//cambiar colores de fondo
let colors= ['black', 'yellow', 'red', 'brown', 'white'];
let button= document.getElementById('button');

button.addEventListener('click', function(){
    var randomColor= colors[Math.floor(Math.random()*colors.length)]

    let container= document.getElementById('fondo');

    container.style.background= randomColor;
})

//cambiar texto de título

let buttonTexto= document.getElementById('buttonCambioTexto');

buttonTexto.addEventListener('click', function(){
    document.getElementById("txt_titulo").innerHTML= "Título cambiado segunda página WEB"
})

