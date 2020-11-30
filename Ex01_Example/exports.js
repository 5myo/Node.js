const odd2 = '홀수입니다';
const even2 = '짝수입니다.';

// 두 가지 이상은 exports를 사용
// ***exports와 module.exports는 같이 사용 불가능
exports.odd2 = odd2;
exports.even2 = even2;

// ----------------

function checkOddOrEven(number) {
    if(number % 2) {
        return odd;
    } else {
        return even;
    }
}

// module.exports는 한 가지 리턴할 때 사용
module.exports = checkOddOrEven;