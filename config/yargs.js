const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'es la base de la tabla',
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        default:false,
        describe:'muestra la tabla en cansola',
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default:10,
        describe:'hasta donde llega',
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'la base tiene que ser un numero';
        }
        if(isNaN(argv.h)){
            throw 'hasta tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;