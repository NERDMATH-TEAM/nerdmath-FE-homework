// ============================================
// Week1 과제 2: 콜백 함수 활용
// ============================================
// 아래 repeat 함수는 이미 완성되어 있습니다.
// repeat를 호출할 때 콜백 함수만 바꿔서 요구사항을 만족시키세요.
//
// 실행: node week1/callback-practice.js

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// --- 요구사항 A ---
// 1~5의 제곱을 출력하세요: 1, 4, 9, 16, 25
console.log("=== 요구사항 A: 제곱 ===");
repeat(5, function(idx) {
  console.log(idx ** 2);
});

// --- 요구사항 B ---
// "1번 학생", "2번 학생", ..., "5번 학생" 을 출력하세요
console.log("\n=== 요구사항 B: 학생 ===");
// 여기에 repeat 호출 코드를 작성하세요:
repeat(5, (idx) => console.log(`${idx}번 학생`));

