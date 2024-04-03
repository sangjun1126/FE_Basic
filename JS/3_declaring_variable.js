/**
 * Variable 선언하기
 * 
 * 1) var - 더 이상 쓰지 않는다.
 * 2) let
 * 3) const
 */

var name = 'sangjun';
console.log(name); // 줄 그어지는건 신경 안써도 됨

var age = 25;
console.log(age);

let ive = '아이브';
console.log(ive);

/** let과 var로 선언하면
 * 값을 추후에 변경이 가능하다.
 */

ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '상준';
// console.log(newJeans)
// const 변수는 이처럼 이후에 변경이 불가능하다.

/**
 * 선언과 할당
 * 
 * 1) 선언은 변수를 선언하는 것을 의미한다.
 * 
 * 2) 할당은 선언한 변수에 값을 넣어주는 것을 의미함
 */

let friend;
console.log(friend); // 할당을 하지 않았기에, undefined로 정의됨;
