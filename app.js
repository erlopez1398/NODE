const { createFile } = require('./helpers/multiplicar');
require('colors');

const argv = require('./config/yargs');


console.clear();

createFile(argv.b, argv.l, argv.h)
    .then(nameFile => console.log(nameFile.rainbow, 'creado'))
    .catch(err => console.log(err));









//console.log(argv);
//console.log('a: yargs', argv.a)
//const [ , , arg3 = 'a=5'] = process.argv;
//const [ , a=5 ] = arg3.split('=');
//const a = 6;