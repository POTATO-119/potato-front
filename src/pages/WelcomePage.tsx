import './WelcomePage.css'
import characterImg from '@/assets/images/main_page/character/img_character.png'
import carrotImg from '@/assets/login/IC_Carrot 1.png'
import tomatoImg from '@/assets/login/IC__Tomato 1.png'
import paprikaImg from '@/assets/login/IC_Paprika 1.png'
import onionImg from '@/assets/login/IC_Onion 1.png'
import broccoliImg from '@/assets/login/IC_Broccoli 1.png'

interface WelcomePageProps {
  onLogin: () => void
  onSignup: () => void
}

export default function WelcomePage({ onLogin, onSignup }: WelcomePageProps) {
  return (
    <div className="welcome-page">
      <div className="welcome-top">
        <p className="welcome-greeting">반가워요</p>
        <h1 className="welcome-title">POTATO</h1>
        <p className="welcome-subtitle">싹 틔울 준비 됐나요?</p>
      </div>

      <div className="welcome-character">
        <img src={carrotImg}   alt="당근"    className="floating-item floating-item--carrot" />
        <img src={tomatoImg}   alt="토마토"  className="floating-item floating-item--tomato" />
        <img src={paprikaImg}  alt="파프리카" className="floating-item floating-item--paprika" />
        <img src={onionImg}    alt="양파"    className="floating-item floating-item--onion" />
        <img src={broccoliImg} alt="브로콜리" className="floating-item floating-item--broccoli" />
        <img src={characterImg} alt="감자 캐릭터" className="welcome-character__img" />
      </div>

      <div className="welcome-actions">
        <button className="welcome-btn welcome-btn--primary" onClick={onLogin}>
          로그인
        </button>
        <button className="welcome-btn welcome-btn--secondary" onClick={onSignup}>
          가입하기
        </button>
      </div>
    </div>
  )
}
