# NerdMath FE Homework

너드수학 프론트엔드 멘토링 과제 제출용 레포지토리입니다.

---

## 처음 세팅 (1회만)

```bash
# 1. 레포 클론
git clone https://github.com/NERDMATH-TEAM/nerdmath-FE-homework.git
cd nerdmath-FE-homework

# 2. dev 브랜치로 이동
git checkout dev
```

---

## 과제 제출 방법

### 1단계: 이슈 확인

GitHub Issues 탭에서 본인에게 할당된 이슈를 확인합니다.

```
예시: #1 [Week1] JavaScript 기초 과제
```

### 2단계: 이슈 브랜치 만들기

이슈 번호와 내용을 기반으로 브랜치를 생성합니다.

```bash
# dev 브랜치 최신화
git checkout dev
git pull origin dev

# 이슈 기반 브랜치 생성 (이슈번호-설명 형태)
git checkout -b feat/1-week1-js-basics
```

> **브랜치 네이밍 규칙**: `feat/이슈번호-간단한설명`
> - `feat/1-week1-js-basics`
> - `feat/2-week2-react-state`
> - `fix/3-arrow-function-bug`

### 3단계: 과제 풀기

`week1/` 폴더의 `.js` 파일을 열고 주석의 지시에 따라 코드를 작성합니다.

```bash
# 실행해서 결과 확인
node week1/arrow-functions.js
node week1/callback-practice.js
node week1/predict-output.js
```

### 4단계: 커밋 & 푸시

```bash
# 변경 파일 확인
git status

# 파일 추가 + 커밋
git add week1/
git commit -m "feat: week1 과제 완료 (#1)"

# 원격에 푸시
git push origin feat/1-week1-js-basics
```

> **커밋 메시지에 `(#1)`을 넣으면** GitHub에서 이슈 링크가 자동 생성됩니다.

### 5단계: PR 생성

GitHub 웹사이트에서:
1. 레포 페이지 → `Pull requests` 탭 → `New pull request`
2. base: `dev` ← compare: `feat/1-week1-js-basics`
3. 제목: `feat: Week1 JavaScript 기초 과제 (#1)`
4. 본문에 아래 내용 작성:
```
Closes #1

## 체크리스트
- [ ] arrow-functions.js 완료
- [ ] callback-practice.js 완료
- [ ] predict-output.js 완료
```
5. `Create pull request` 클릭

> `Closes #1`을 적으면 PR이 머지될 때 이슈가 자동으로 닫힙니다.

---

## 주차별 과제

| 주차 | 브랜치 | 파일 |
|------|--------|------|
| Week1 | `feature/week1` | `week1/arrow-functions.js`, `callback-practice.js`, `predict-output.js` |

---

## Git 명령어 요약

| 상황 | 명령어 |
|------|--------|
| 현재 상태 확인 | `git status` |
| 변경 내역 보기 | `git diff` |
| 파일 스테이징 | `git add 파일명` |
| 커밋 | `git commit -m "메시지"` |
| 원격에 푸시 | `git push origin 브랜치명` |
| 브랜치 목록 | `git branch` |
| 브랜치 이동 | `git checkout 브랜치명` |
| 브랜치 생성+이동 | `git checkout -b 브랜치명` |
| 원격 최신화 | `git pull origin 브랜치명` |
