var fs = require('fs')
var path = require('path')

fs.readFile(path.join(__dirname, 'test.txt'), function(err, data) {
    if (err) {
        console.error(err);
        return;
    }
    
    console.log(data.toString())
});

console.log('The end!')