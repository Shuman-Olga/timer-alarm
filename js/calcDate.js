import  {printResult} from './output.js'
import calcDatesDiff from './calcDatesDiff.js'
import  {printError} from './error.js'

const form = document.getElementById('calcDate');

form.onsubmit = (event) => {
    
    event.preventDefault()
    const formData = new FormData(event.target);

    const dateFrom = formData.get('dateFrom');
    const dateTo = formData.get('dateTo');
    console.log('dateFrom', dateFrom);
    console.log('dateTo', dateTo);

    if (!dateFrom || !dateTo) {
        printError('Для расчета промежутка необходимо заполнить оба поля');
        return
    }
      
    const datesDiff = calcDatesDiff(dateFrom, dateTo);

    printResult(datesDiff);
}