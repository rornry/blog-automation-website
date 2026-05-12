# 블로그 자동화 - 통합 포트폴리오 웹사이트

AI 기반 블로그 자동화 플랫폼의 공식 웹사이트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Responsive**: Mobile, Tablet, Desktop

## 📁 프로젝트 구조

```
blog-automation-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # 홈 페이지
│   │   └── globals.css     # 전역 스타일
│   └── components/         # 재사용 컴포넌트
├── public/                 # 정적 자산
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎯 주요 기능

### 홈 페이지
- 네비게이션 바
- 히어로 섹션
- 6가지 주요 기능 소개
- 3가지 플랫폼 (데스크톱, 모바일, 웹)
- 블로그 섹션
- 프로젝트 통계
- 푸터

### 플랫폼 소개
1. **데스크톱 앱** - Python + PyQt6
2. **모바일 앱** - React Native + Expo
3. **웹 앱** - Next.js + React

## 🛠️ 로컬 개발

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 프로덕션 빌드

```bash
npm run build
npm start
```

## 🌐 배포

### Vercel 배포

1. GitHub에 저장소 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 임포트
3. 자동으로 배포됨

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo>
git push -u origin main
```

### 환경 변수

필요한 환경 변수가 있으면 Vercel 대시보드에서 설정하세요.

## 📝 라이선스

MIT License

## 👨‍💻 개발자

블로그 자동화 팀

## 📞 연락처

- 이메일: info@blogautomation.com
- GitHub: [블로그 자동화](https://github.com)
- Twitter: [@blogautomation](https://twitter.com)

---

**최종 수정**: 2026년 5월 12일
