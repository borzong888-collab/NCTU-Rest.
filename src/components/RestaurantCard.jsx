import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getStatus } from '../data/data'
import './RestaurantCard.css'

const STATUS_DOT = {
  open:    'dot dot-open',
  closing: 'dot dot-closing',
  closed:  'dot dot-closed',
}

function RestaurantCard({ restaurant }) {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const status = getStatus(restaurant)

  const primaryName = i18n.language === 'en' ? restaurant.englishName : restaurant.name
  const altName     = i18n.language === 'en' ? restaurant.name        : restaurant.englishName

  const hoursStr = restaurant.hours.map(h => `${h.open} - ${h.close}`).join('  |  ')

  const dayLabels = t('days', { returnObjects: true })

  return (
    <div
      className={`restaurant-card ${status === 'closed' ? 'card-closed' : ''}`}
      onClick={() => navigate(`/restaurant/${restaurant.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && navigate(`/restaurant/${restaurant.id}`)}
    >
      <div className="card-name-row">
        <span className={STATUS_DOT[status]} />
        <span className="card-name">{primaryName}</span>
      </div>

      <div className="card-name-eng">{altName}</div>

      <div className="card-hours">{hoursStr}</div>

      <div className="card-days">
        {dayLabels.map((label, idx) => (
          <span
            key={idx}
            className={`day-badge ${restaurant.days.includes(idx) ? 'day-active' : 'day-inactive'}`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default RestaurantCard
