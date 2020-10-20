module.exports = function reverse (n) {
    let strN = String(n);
    strN = strN.split('').reverse().join('');
    return strN = parseInt(strN);
}
