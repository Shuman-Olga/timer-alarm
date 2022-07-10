const paragraph = document.getElementById('output');

export function printError(errorText){
   
    paragraph.innerHTML = errorText;
}