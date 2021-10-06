const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// const base=3;

console.clear();
// console.log(process.argv);
// const [,,arg3='base=5'] = process.argv;
// const [,base = 5] = arg3.split('=');
// console.log(base);

// console.log(process.argv);
// console.log(argv);
// console.log('yargs base',argv.base);

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log('archivo ',nombreArchivo,'creado') )
    .catch( err => console.log(err) );
