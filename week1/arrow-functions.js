// ============================================
// Week1 과제 1: 화살표 함수 변환
// ============================================
// 아래 3개의 함수 선언문을 화살표 함수로 바꿔보세요.
// 한 줄 반환이면 중괄호와 return을 생략할 수 있습니다.
//
// 실행: node week1/arrow-functions.js

// --- 문제 1 ---
function add(a, b) {
  return a + b;
}

// 여기에 화살표 함수로 바꿔서 작성하세요:
// const add = ...

// --- 문제 2 ---
function greet(name) {
  return "안녕, " + name + "!";
}

// 여기에 화살표 함수로 바꿔서 작성하세요:
// const greet = ...

// --- 문제 3 ---
function isEven(num) {
  return num % 2 === 0;
}

// 여기에 화살표 함수로 바꿔서 작성하세요:
// const isEven = ...

// --- 테스트 (수정하지 마세요) ---
console.log("=== 테스트 ===");
console.log(add(3, 5));       // 8
console.log(greet("철수"));   // "안녕, 철수!"
console.log(isEven(4));       // true
console.log(isEven(7));       // false
