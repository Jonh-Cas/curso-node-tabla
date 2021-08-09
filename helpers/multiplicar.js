const fs = require('fs');
let colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    
    let consola = '';
    let salida = '';

    
    for (let i = 1; i <= hasta; i++) {
        consola += (`${base} x ${i} = ${base * i}\n`);
        salida  += (`${base} x ${i} = ${base * i}\n`);
    }

    if (listar) {

        console.log(colors.blue.inverse('====================='));
        console.log(colors.red.underline.inverse(`=  Tabala del ${base}     =`));
        console.log('====================='.green);
        console.log( colors.rainbow(consola) );
    }

    // respuesta del .then
    await fs.writeFile(`./salida/tabla-${base}.txt`, salida, err => {
        if (err) throw err;
    });

    // respuesta del .catch
    // await fs.writeFile(`tabla-${base}.txt`, salida);
    return colors.rainbow(`Tabla del ${base} creada`);
}

module.exports = {
    crearArchivo
}