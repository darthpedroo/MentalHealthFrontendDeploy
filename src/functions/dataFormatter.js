// '/functions' directory will have pure functions unless it's not possible. 
// this functions doesn't access or modify external data or variables, just take an input (arguments) and return the output


export default function formatDate(msgDate, actualDate) {

    let date = new Date(msgDate);
    msgDate= date.getTime()

    let timeValues = [
        ["m", 12],
        ["d", 30],
        ["h", 24],
        ["min", 60],
        ["s", 60],
    ]


    actualDate = actualDate / (1000*60*60*24*30*12) 
    /* las variables devuelven la cantidad de milisegundos, por lo que los pasamos a dias*/
    msgDate = msgDate / (1000*60*60*24*30*12)


    let difference = actualDate - msgDate
    let timeExpression = "a"

    for (let index in timeValues) {
        if (difference < 1) {
            difference = difference * timeValues[index][1]
            timeExpression = timeValues[index][0]
        } else { break }
    }
    
    difference = parseInt(difference)
    


    return `hace ${difference} ${timeExpression}`
}