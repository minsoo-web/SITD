# Side to Docs

## Description

이 앱은 CLI 환경에서 구동하는 nodejs app입니다.  
side 파일에서 필요한 정보들만 추출하여 md 파일로 작성해줍니다.

## How to use

clone this repo

```bash
# in your workspace
git clone https://github.com/Minsoo-web/SITD.git
```

run this command

```bash
cd SITD
npm install

# on linux
sudo npm install -g .

# window
npm install -g .
```

now you can test

```bash
sitd --help
sitd --version
sitd --path ./naver_test.side
```

## 향후 계획

1. 예외처리 (에러)
2. xlsx 파일 생성
3. npm 배포
