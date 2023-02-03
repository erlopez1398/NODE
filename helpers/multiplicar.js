const fs = require('fs');//para importar la lib
const colors = require('colors');


const createFile = async (base = 5, listar = false, hasta = 10) => {
    try {


        let output, consola = '';


        for (let i = 1; i <= hasta; i++) {
            output += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.red} ${i} ${'='.magenta} ${base * i}\n`;
        }
        
        if (listar) {
            console.log('===================='.green);
            console.log('   Tabla del:'.green, colors.blue(base));
            console.log('===================='.green);

            console.log(consola);
        }


        fs.writeFileSync(`./salida/tabla_del_${base}.txt`, output);

        return `tabla-${base}.txt`;
        
    } catch (err) {
        return err;
    }

}

module.exports = {
    createFile
}