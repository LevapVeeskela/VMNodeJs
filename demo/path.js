const path = require('path');

console.log('name file: ', path.basename(__filename))

console.log('name directory: ', path.dirname(__filename))

console.log('name extantion: ', path.extname(__filename))

console.log('parse: ', path.parse(__filename))