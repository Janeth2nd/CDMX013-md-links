const fs = require('fs')
const path = require('node:path');
const { resolve } = require('path');

const absolutePath = (fileMd) => {
    try {
        if (fs.existsSync(fileMd)) {
            //file exists
            if (path.isAbsolute(fileMd) == false) {
                const absolutePath = resolve(fileMd);
                return absolutePath;

            } else {
                return fileMd
            }
        }
    } catch (err) {
        //console.error('tu archivo no es válido');
         return 'Tu archivo no es valido';
    }
}
console.log(module);
module.exports = { absolutePath }
