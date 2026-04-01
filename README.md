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

### 1단계: 브랜치 만들기

```bash
# dev 브랜치 최신화
git checkout dev
git pull origin dev

# 과제 브랜치 생성
git checkout -b feature/week1
```

### 2단계: 과제 풀기

`week1/` 폴더의 `.js` 파일을 열고 주석의 지시에 따라 코드를 작성합니다.

```bash
# 실행해서 결과 확인
node week1/arrow-functions.js
node week1/callback-practice.js
node week1/predict-output.js
```

### 3단계: 커밋 & 푸시

```bash
# 변경 파일 확인
git status

# 파일 추가 + 커밋
git add week1/
git commit -m "week1: 과제 완료"

# 원격에 푸시
git push origin feature/week1
```

### 4단계: PR 생성

```bash
# GitHub에서 PR 생성 (dev 브랜치로)
# 아래 명령어 또는 GitHub 웹사이트에서 직접 생성
gh pr create --base dev --title "Week1 과제 제출" --body "Closes #1"
```

또는 GitHub 웹사이트에서:
1. 레포 페이지 → `Pull requests` 탭 → `New pull request`
2. base: `dev` ← compare: `feature/week1`
3. 제목: `Week1 과제 제출`
4. 본문: `Closes #1`
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
