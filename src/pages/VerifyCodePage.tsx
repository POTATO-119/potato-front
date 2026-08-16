import { useRef, useState } from 'react'
import './VerifyCodePage.css'

interface VerifyCodePageProps {
  onBack: () => void
  onVerify: () => void
}

export default function VerifyCodePage({ onBack, onVerify }: VerifyCodePageProps) {
  const [codes, setCodes] = useState(['', '', '', ''])
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  function handleChange(index: number, value: string) {
    const digit = value.replace(/\D/g, '').slice(-1)
    const next = [...codes]
    next[index] = digit
    setCodes(next)
    if (digit && index < 3) inputs.current[index + 1]?.focus()
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace' && !codes[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  return (
    <div className="verify-page">
      <button className="verify-back" onClick={onBack} aria-label="뒤로가기">
        ‹
      </button>

      <div className="verify-header">
        <h1 className="verify-title">인증번호 입력</h1>
        <p className="verify-subtitle">
          메일로 받은 4자리 번호를
          <br />
          입력해 주세요
        </p>
      </div>

      <div className="verify-code-row">
        {codes.map((val, i) => (
          <input
            key={i}
            ref={(el) => { inputs.current[i] = el }}
            className="verify-code-box"
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={val}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
          />
        ))}
      </div>

      <button className="verify-resend">인증번호 재전송</button>

      <button className="verify-submit" onClick={onVerify}>
        인증하기
      </button>
    </div>
  )
}
