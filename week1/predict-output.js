// ============================================
// Week1 과제 3: 실행 결과 예측
// ============================================
// 각 문제의 실행 결과를 먼저 예측해서 주석으로 적고,
// 그 다음 node로 실행해서 맞는지 확인하세요.
//
// 실행: node week1/predict-output.js

// --- 문제 1: Truthy/Falsy ---
// 아래 코드에서 어떤 알파벳이 출력될지 예측하세요.
// 예측: (여기에 적으세요)

if ("") console.log("A");
if ("hello") console.log("B");
if (0) console.log("C");
if ([]) console.log("D");
if (null) console.log("E");
if (undefined) console.log("F");
if (42) console.log("G");

// --- 문제 2: 콜백 실행 순서 ---
// 아래 코드의 출력 순서를 예측하세요.
// 예측: (여기에 적으세요)

console.log("\n=== 실행 순서 ===");

function outer(cb) {
  console.log("시작");
  cb();
  console.log("끝");
}

outer(function () {
  console.log("중간");
});
