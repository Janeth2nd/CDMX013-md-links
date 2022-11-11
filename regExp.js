const fs = require('fs');
const path = require('path')

const pathText = path.join(__dirname, './readme.md');
const readingFile = fs.readFileSync(pathText, 'utf-8');

const regex = /\[(.+)\]\((https?:.+)\)/ig;
const linksArray = Array.from(readingFile.match(regex))
console.log(linksArray);


module.exports = { linksArray }





