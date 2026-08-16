import './ResetPasswordPage.css'

interface ResetPasswordPageProps {
  onBack: () => void
  onSave: () => void
}

export default function ResetPasswordPage({ onBack, onSave }: ResetPasswordPageProps) {
  return (
    <div className="reset-page">
      <button className="reset-back" onClick={onBack} aria-label="뒤로가기">
        ‹
      </button>

      <div className="reset-header">
        <h1 className="reset-title">비밀번호 재설정</h1>
        <p className="reset-subtitle">
          이전과 다르게 설정해야
          <br />
          안전하게 바꿀 수 있어요
        </p>
      </div>

      <form className="reset-form" onSubmit={(e) => e.preventDefault()}>
        <input className="reset-input" type="password" placeholder="새 비밀번호" />
        <input className="reset-input" type="password" placeholder="비밀번호 확인" />

        <button className="reset-submit" type="submit" onClick={onSave}>
          저장하기
        </button>
      </form>
    </div>
  )
}
