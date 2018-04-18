var fs = require('fs')
var path = require('path')

var data = fs.readFileSync(path.join(__dirname, './test.txt'))

console.log(data.toString())
console.log('The End!')
