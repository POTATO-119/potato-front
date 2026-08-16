import './Character.css'
import characterImg from '@/assets/images/character/img_character.png'

export default function Character() {
  return (
    <div className="character">
      <img className="character__image" src={characterImg} alt="요리사 감자 캐릭터" />
      <p className="character__tagline">먹고, 자라고, 기록 중</p>
    </div>
  )
}
