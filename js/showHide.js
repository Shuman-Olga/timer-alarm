import {start} from './timer.js';

export function showHide(e) {
    document.getElementById('output').innerHTML = ``;
    e.preventDefault()
    
    if (e.target.id === 'tabTimer') {
        document.form_timer.start.onclick = () => start();
        document.getElementById('calculatorContent').style.display='none';
        document.getElementById('timerContent').style.display='block';
        document.getElementById('tabCalc').style.backgroundColor='white';
        document.getElementById('tabTimer').style.backgroundColor='yellow';
    } else {
        document.getElementById('calculatorContent').style.display='block';
        document.getElementById('timerContent').style.display='none';
        document.getElementById('tabCalc').style.backgroundColor='yellow';
        document.getElementById('tabTimer').style.backgroundColor='white';
    }
}

