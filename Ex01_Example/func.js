// ./ -> 현재 내가 있는 폴더
// ../ -> 부모 폴더
// ../../ -> 조부모 폴더

// 노드에서 제공하는 함수
// require 메서드를 통해 외부 모듈을 가져올 수 있다.
// const value = require('./var') 
// const odd = value.odd;
// const even = value.even;

// 위 코드가 축약된 코드
const { odd, even } = require('./var');
// consle.time('zerocho'); // 여기부터
function checkOddOrEven(num) {
    if(num % 2) {
        return odd;
    }else {
        return even;
    }
}
// console.timeEnd('zerocho'); // 여기까지 실행되는 시간을 알 수 있다.
 // 파일에서 단 한 번만 사용 가능
 // 다른 파일에서 재사용 가능
module.exports = checkOddOrEven;
