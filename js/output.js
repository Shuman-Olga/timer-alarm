const paragraph = document.getElementById('output');

const printResult = ({ years, months, days }) => {
    paragraph.innerHTML = `
        год: ${years}
        месяц: ${months}
        день: ${days}
    `
}
export {printResult}
