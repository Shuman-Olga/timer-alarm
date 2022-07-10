import {DateTime}  from '../node_modules/luxon'

export default (dateFromString, dateToString)=> {
    if (dateFromString<dateToString) {
        [dateFromString, dateToString] = [dateToString, dateFromString];
    } 

    const dateFrom = DateTime.fromISO(dateFromString);
    const dateTo = DateTime.fromISO(dateToString);
         
    const diff = dateFrom.diff(dateTo, ['years', 'months', 'days']).toObject() 
    
    console.log(diff)
    
    return diff
} 