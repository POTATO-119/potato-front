import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <span className="header__hat-icon">👨‍🍳</span>
        <span className="header__title">자취인</span>
      </div>
      <button className="header__settings-btn" aria-label="설정">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M11 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            stroke="#555"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M18.2 13.6a1.5 1.5 0 0 0 .3 1.65l.05.05a1.8 1.8 0 0 1-2.55 2.55l-.05-.05a1.5 1.5 0 0 0-1.65-.3 1.5 1.5 0 0 0-.9 1.37V19a1.8 1.8 0 0 1-3.6 0v-.07A1.5 1.5 0 0 0 9 17.56a1.5 1.5 0 0 0-1.65.3l-.05.05a1.8 1.8 0 0 1-2.55-2.55l.05-.05A1.5 1.5 0 0 0 5.1 13.6a1.5 1.5 0 0 0-1.37-.9H3.6a1.8 1.8 0 0 1 0-3.6h.07A1.5 1.5 0 0 0 5.04 8.4a1.5 1.5 0 0 0-.3-1.65l-.05-.05A1.8 1.8 0 0 1 7.24 4.15l.05.05A1.5 1.5 0 0 0 8.94 4.5a1.5 1.5 0 0 0 .9-1.37V3a1.8 1.8 0 0 1 3.6 0v.07a1.5 1.5 0 0 0 .9 1.37 1.5 1.5 0 0 0 1.65-.3l.05-.05a1.8 1.8 0 0 1 2.55 2.55l-.05.05A1.5 1.5 0 0 0 18.2 8.4a1.5 1.5 0 0 0 1.37.9H19a1.8 1.8 0 0 1 0 3.6h-.07a1.5 1.5 0 0 0-1.37.9Z"
            stroke="#555"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </header>
  )
}
