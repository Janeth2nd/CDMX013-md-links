const fetch = require('node-fetch');
const fileMd = './README.md';
const { linksArray } = require('./regExp.js');

linksArray.forEach(texto => {
    const splitText = texto.split('(');
    const linkText = splitText[0].replace('[', '').replace(']', '');
    const replaceText = splitText.pop().replace(')', '')

    fetch(replaceText).then(response => {
        if (response.status == '200') {
            console.log({ href: replaceText, text: linkText, file: fileMd, status: response.status, word: 'ok' });
        } else {
            console.log(response.status, 'fail');
        }
    }).catch(err => {
        console.log({ href: replaceText, text: linkText, file: fileMd, word: 'fail', status: '404' });
    });

});