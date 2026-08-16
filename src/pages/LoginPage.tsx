import './LoginPage.css'

interface LoginPageProps {
  onBack: () => void
  onLogin: () => void
  onSignup: () => void
  onForgotPassword: () => void
}

export default function LoginPage({ onBack, onLogin, onSignup, onForgotPassword }: LoginPageProps) {
  return (
    <div className="login-page">
      <button className="login-back" onClick={onBack} aria-label="뒤로가기">
        ‹
      </button>

      <div className="login-header">
        <h1 className="login-title">로그인</h1>
        <p className="login-subtitle">로그인 하고 내 POTATO를 확인해요</p>
      </div>

      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <input className="login-input" type="text" placeholder="POTATO 아이디" />
        <input className="login-input" type="password" placeholder="비밀번호" />

        <div className="login-find-pw">
          <button type="button" className="login-find-pw__btn" onClick={onForgotPassword}>
            비밀번호 찾기
          </button>
        </div>

        <button className="login-submit" type="submit" onClick={onLogin}>
          로그인
        </button>
      </form>

      <p className="login-signup-link">
        아직 계정이 없나요?{' '}
        <button className="login-signup-btn" onClick={onSignup}>
          회원가입
        </button>
      </p>
    </div>
  )
}
