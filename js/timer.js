"use strict";
import  {printError} from './error.js'
import alarmMusic from '../alarm.mp3'
document.form_timer.stop.onclick = () => stop();

const timerInput = document.getElementById('time')
const  timerShow = document.getElementById('output')

let timeMinut;
let timer;
let strTimer;
export function start() {
    event.preventDefault()
    if (timerInput.value==="") {
        printError('Для включения таймера введите время'); 
        stopPropagation();
    }
    timeMinut = parseInt(timerInput.value) * 60;
    timer = setInterval(() => {
    const seconds = timeMinut%60
    const minuts = timeMinut/60%60
    const hour = timeMinut/60/60%60
           
     strTimer = `
    ${Math.trunc(hour)}:${Math.trunc(minuts)}:${Math.trunc(seconds)}
    `;
        timerShow.innerHTML = strTimer;
        if (timeMinut<=0) {
            let sound = new Howl({
                src: [alarmMusic]
            });
            sound.play();
            clearInterval(timer);
            printError('Время закончилось');
        }
        --timeMinut;
    }, 1000)
}

function stop() {
    event.preventDefault();
    clearInterval(timer);
    timerShow.innerHTML = strTimer;
    

}