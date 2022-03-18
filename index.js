const cowsay = require('cowsay');
const student = require('./information');
console.log (
    cowsay.say({
        text:(`Hello my name is ${student.name}, and I'm at ${student.campus}`)
    })
)
