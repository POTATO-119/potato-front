import './ForgotPasswordPage.css'

interface ForgotPasswordPageProps {
  onBack: () => void
  onConfirm: () => void
}

export default function ForgotPasswordPage({ onBack, onConfirm }: ForgotPasswordPageProps) {
  return (
    <div className="forgot-page">
      <button className="forgot-back" onClick={onBack} aria-label="뒤로가기">
        ‹
      </button>

      <div className="forgot-header">
        <h1 className="forgot-title">비밀번호를 잊으셨나요?</h1>
        <p className="forgot-subtitle">이메일 주소를 입력해 주세요</p>
      </div>

      <form className="forgot-form" onSubmit={(e) => e.preventDefault()}>
        <input className="forgot-input" type="email" placeholder="이메일" />
        <button className="forgot-submit" type="submit" onClick={onConfirm}>
          확인
        </button>
      </form>
    </div>
  )
}
