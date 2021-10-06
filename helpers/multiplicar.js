const colors = require('colors');

const fs = require('fs');

const crearArchivo = async (base = 5, listar=false, hasta=10) => {
    
    console.log('==========================='.green);
    console.log('    TABLA DEL '.trap,base);
    console.log('==========================='.rainbow);

    let salida = '';

    for(let i=1;i<=hasta;i++){
        salida += `${base} x ${i} = ${base*i}\n`;
    }
    
    if(listar){
        console.log(salida);
    }
    // fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    //     if(err) throw err;
    
    //     console.log(`tabla-${base}.txt`);
    // });
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    // console.log(`tabla-${base}.txt creado`);

    return `tabla-${base}.txt`;
}

module.exports = {
    crearArchivo: crearArchivo
}