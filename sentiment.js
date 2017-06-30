var sentiment = require('sentiment');

var r1 = sentiment('Hello!');
console.dir(r1);

var r2 = sentiment('Yay');
console.dir(r2);
