import { useState } from 'react'
import '@/pages/HomePage.css'

import homeIcon from '@/assets/images/icon/home.png'
import homeActiveIcon from '@/assets/images/icon/home1.png'
import uploadIcon from '@/assets/images/icon/upload.png'
import exploreIcon from '@/assets/images/icon/explore.png'
import exploreActiveIcon from '@/assets/images/icon/explore1.png'
import friendIcon from '@/assets/images/icon/friend.png'
import friendActiveIcon from '@/assets/images/icon/friend1.png'
import itemShopIcon from '@/assets/images/icon/item shop.png'
import itemShopActiveIcon from '@/assets/images/icon/item shop1.png'

const NAV_ITEMS = [
  { id: 'itemshop', icon: itemShopIcon, activeIcon: itemShopActiveIcon, label: '상점' },
  { id: 'upload', icon: uploadIcon, activeIcon: uploadIcon, label: '카메라' },
  { id: 'home', icon: homeIcon, activeIcon: homeActiveIcon, label: '위치' },
  { id: 'explore', icon: exploreIcon, activeIcon: exploreActiveIcon, label: '돋보기' },
  { id: 'friend', icon: friendIcon, activeIcon: friendActiveIcon, label: '사람' },
] as const

type NavId = (typeof NAV_ITEMS)[number]['id']

export default function BottomNav() {
  const [active, setActive] = useState<NavId>('home')

  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map((item) => {
        const isActive = active === item.id
        return (
          <button
            key={item.id}
            className={`bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`}
            onClick={() => setActive(item.id)}
            aria-label={item.label}
          >
            <img
              className="bottom-nav__icon-img"
              src={isActive ? item.activeIcon : item.icon}
              alt={item.label}
            />
            <span className="bottom-nav__indicator" />
          </button>
        )
      })}
    </nav>
  )
}
