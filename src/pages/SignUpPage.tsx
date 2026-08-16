import './SignUpPage.css'

interface SignUpPageProps {
  onBack: () => void
  onLogin: () => void
}

export default function SignUpPage({ onBack, onLogin }: SignUpPageProps) {
  return (
    <div className="signup-page">
      <button className="signup-back" onClick={onBack} aria-label="뒤로가기">
        ‹
      </button>

      <div className="signup-header">
        <h1 className="signup-title">회원가입</h1>
        <p className="signup-subtitle">계정 만들고 POTATO 키우기 시작해요</p>
      </div>

      <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
        <input className="signup-input" type="text" placeholder="아이디" />
        <input className="signup-input" type="password" placeholder="비밀번호" />
        <input className="signup-input" type="password" placeholder="비밀번호 확인" />

        <button className="signup-submit" type="submit">
          가입하기
        </button>
      </form>

      <p className="signup-login-link">
        이미 계정이 있나요?{' '}
        <button className="signup-login-btn" onClick={onLogin}>
          로그인
        </button>
      </p>
    </div>
  )
}
