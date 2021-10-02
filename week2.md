---
marp: true
---

# CRA로 React App 생성하고 netlify에 배포하기

---
## CRA는?
Create React App는 React 프로젝트를 만들기 위해 필요한 보일러플레이트를 자동으로 생성해주는 프레임워크입니다.

- 레퍼런스: https://create-react-app.dev/

---
## React App 생성
```shell
npx create-react-app [프로젝트] --template typescript --use-npm
```
- `[프로젝트 이름]`은 영어 소문자와 숫자, 대시(-)로 구성하기를 권장합니다.
- `--template typescript` flag를 적어주어 typescript 템플릿을 이용해 생성합니다.
- 패키지 관리자로 `yarn`이 아닌 `npm`을 사용하고 싶다면 `--use-npm` 플래그를 사용합니다.

## 실행

```python
cd [프로젝트]
npm start # yarn으로 설치했다면 yarn start
```
- http://localhost:3000 으로 React Application이 실행됩니다.

---

## Netlify 설정

netlify.com 에 github 계정을 이용해 로그인 합니다.

---
