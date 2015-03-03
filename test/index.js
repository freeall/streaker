var test = require('tape');

var number = require('../');

test('exports number', function(t) {
	t.ok(typeof number === 'number');
	t.end();
});
