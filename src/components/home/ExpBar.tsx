import './ExpBar.css'

interface ExpBarProps {
  current: number
  max: number
}

export default function ExpBar({ current, max }: ExpBarProps) {
  const percent = Math.min((current / max) * 100, 100)

  return (
    <div className="expbar">
      <div className="expbar__numbers">
        <span className="expbar__current">{current.toLocaleString()}</span>
        <span className="expbar__separator"> / </span>
        <span className="expbar__max">{max.toLocaleString()}</span>
      </div>
      <div className="expbar__track" role="progressbar" aria-valuenow={current} aria-valuemax={max}>
        <div className="expbar__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}
