// 전역 스코프의 this는 빈객체로 출력
// global(X)
console.log(this); 
console.log(this === module.exports === {} === exports);

function a() {
    console.log(this === global); // global(O)
}
a();



