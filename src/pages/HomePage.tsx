import './HomePage.css'
import BottomNav from '@/components/layout/BottomNav'
import characterImg from '@/assets/images/main_page/character/img_character.png'
import bgImg from '@/assets/images/main_page/background/img_Background_Checkerboard 1.png'
import badgeImg from '@/assets/images/main_page/main_button/img_badge.png'
import settingImg from '@/assets/images/main_page/main_button/setting.png'

const CURRENT_EXP = 626
const MAX_EXP = 2500

function ProgressBar({ current, max }: { current: number; max: number }) {
  const percent = Math.min((current / max) * 100, 100)
  return (
    <div className="progress-bar-wrap">
      <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${bgImg})` }}>
      {/* 체크 배경 위에 올라가는 흰 카드 */}
      <main className="home-content">
        <div className="pixel-card">
          {/* 헤더 */}
          <header className="home-header">
            <div className="home-header__title">
              <img className="home-header__badge" src={badgeImg} alt="배지" />
              자취인
            </div>
            <button className="home-header__settings" aria-label="설정">
              <img className="home-header__setting-icon" src={settingImg} alt="설정" />
            </button>
          </header>

          <div className="pixel-card__body">
            {/* 경험치 */}
            <div className="pixel-stat">
              <span className="pixel-stat__current">{CURRENT_EXP.toLocaleString()}</span>
              <span className="pixel-stat__separator"> / </span>
              <span className="pixel-stat__max">{MAX_EXP.toLocaleString()}</span>
            </div>

            {/* 프로그레스 바 */}
            <ProgressBar current={CURRENT_EXP} max={MAX_EXP} />

            {/* 캐릭터 */}
            <div className="character-area">
              <img className="character-image" src={characterImg} alt="요리사 감자 캐릭터" />
              <p className="character-tagline">먹고, 자라고, 기록 중</p>
            </div>

            {/* 액션 버튼 */}
            <div className="card-actions">
              <button className="card-action-icon-btn" aria-label="달력">
                📅
              </button>
              <button className="card-action-main-btn">오늘의 요리</button>
              <button className="card-action-icon-btn" aria-label="요리 도구">
                🥄
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* 하단 네비게이션 */}
      <BottomNav />
    </div>
  )
}
