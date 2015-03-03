var fs = require('fs');
var path = require('path');

var tmp = fs.readFileSync(path.join(__dirname, 'tmp'), 'utf-8');
var number = parseFloat(tmp);

module.exports = number;
