# 🥔 POTATO Frontend

POTATO 웹 클라이언트는 사용자가 요리 인증 보상을 확인하고, 상점에서 아이템을 구매해 캐릭터에 장착할 수 있는 화면을 제공합니다.

## 폴더 구조

```text
src/
├── pages/             # 로그인, 회원가입, 홈 등 라우팅 화면
├── features/          # 인증 등 도메인별 기능과 API
├── components/
│   ├── home/          # 홈 화면 전용 컴포넌트
│   ├── layout/        # 공통 레이아웃과 내비게이션
│   └── ui/            # 재사용 UI 컴포넌트
├── lib/               # Axios API 클라이언트
├── router/            # 화면 경로 설정
├── store/             # 전역 상태 관리
├── hooks/             # 공통 React 훅
├── types/             # 공통 TypeScript 타입
├── utils/             # 공통 유틸리티
└── assets/            # 이미지와 정적 리소스
```

## 실행 환경

- Node.js 20 이상
- npm
- `http://localhost:8080`에서 실행 중인 [POTATO Backend](https://github.com/POTATO-119/potato-back)

## 설치 및 실행

```bash
git clone https://github.com/POTATO-119/potato-front.git potato-frontend
cd potato-frontend
npm install
cp .env.example .env.local
npm run dev
```

`.env.local`에 로컬 백엔드 주소를 설정합니다.

```dotenv
VITE_API_BASE_URL=http://localhost:8080
VITE_API_TIMEOUT=5000
VITE_APP_NAME=POTATO
VITE_APP_ENV=development
```

개발 서버가 시작되면 <http://localhost:5173>에 접속합니다.

## 실행 확인

1. 로그인 화면이 정상적으로 표시되는지 확인합니다.
2. 브라우저 개발자 도구의 Network 탭에서 API 요청이 `http://localhost:8080`으로 전달되는지 확인합니다.
3. 백엔드와 함께 실행해 회원가입·로그인 및 상점·인벤토리 기능의 연결을 확인합니다.

## 명령어

```bash
npm run dev      # 개발 서버 실행
npm run build    # 타입 검사 및 프로덕션 빌드
npm run lint     # 정적 분석
npm run format   # 코드 포맷팅
```
