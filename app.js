

console.clear();

const argv = require('./config/yargs');

const { crearArchivo } = require('./helpers/multiplicar')

crearArchivo(argv.b, argv.l, argv.h)
.then(resp => console.log(resp))
.catch(err => console.log(err));


// let colors = require('colors');

// console.log('hola mundo '.green);
// console.log('Hola que hace'.blue);
// console.log('Hola que hace'.rainbow);
// console.log(colors.green('Hola jonathan'));




// Esta linea de comandos no es recomendada 

// const base = 2;
// const { argv } = require('process');
// console.log(process.argv);

// const [ ,,arg3 = 'base=5' ] = process.argv;
// const [,base = 5] = arg3.split('=');


