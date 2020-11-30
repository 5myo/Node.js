const { odd, even } = require('./var'); // 모듈 사용
const checkNumber = require('./func');


function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    } else {
        return even;
    }
}
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));