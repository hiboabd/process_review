function ReturnEcho (message) {
    let currentDate = new Date().toISOString().substring(0,10)
    let currentTime = new Date().toISOString().substring(11,19)
    return message === 'exit' ? 'goodbye' : `${currentDate} | ${currentTime} | You said: '${message}'!`
}
