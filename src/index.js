const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbolCodes = [];

    for (let i = 0; i < expr.length / 10; i++) {
        symbolCodes.push(expr.substring(i * 10, i * 10 + 10));
    }

    const resultArray = symbolCodes.map( (value) =>
    {
        if(value.substring(0,2) === '**'){
            return ' ';
        } else {
            let literalCodes = [];
            for (let k = 0; k < value.length / 2; k++) {
                literalCodes.push(value.substring(k * 2, k * 2 + 2));
            }

            return MORSE_TABLE[literalCodes.map( (code) => code === '00' ? '' : code === '11' ? '-' : '.').join('')];
        }
    });
    
    return resultArray.join('');
}

module.exports = {
    decode
}