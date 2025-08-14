const repeatString = function (string, num) {
    let frase = "";
    if (num < 0) {
        frase= "ERROR";
        return frase;
    } else {
        for (let i = 1; i <= num; i++) {
            frase += string;
        }
        return frase;
    }
};

// Do not edit below this line
module.exports = repeatString;
