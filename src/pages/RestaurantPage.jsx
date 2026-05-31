import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { restaurants, getStatus } from '../data/data'
import MenuCard from '../components/MenuCard'
import PaymentBadge from '../components/PaymentBadge'
import './RestaurantPage.css'

const CATEGORY_GRADIENT = {
  '第二餐廳':  '#f97316',
  '女二舍餐廳': '#a78bfa',
  '研三舍餐廳': '#38bdf8',
  '其他': '#a3e635',
}

const STATUS_CLS = {
  open: 'rp-status rp-status-open',
  closing: 'rp-status rp-status-closing',
  closed: 'rp-status rp-status-closed',
}

function RestaurantPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const r = restaurants.find(item => item.id === id)

  if (!r) {
    return (
      <div className="not-found">
        <h2>{t('page.notFound')}</h2>
        <button className="back-btn" onClick={() => navigate('/')}>{t('page.backHome')}</button>
      </div>
    )
  }

  const status   = getStatus(r)
  const gradient = CATEGORY_GRADIENT[r.category] ?? CATEGORY_GRADIENT['其他']

  // 多語言名稱切換
  const primaryName = i18n.language === 'en' ? r.englishName : r.name
  const altName = i18n.language === 'en' ? r.name : r.englishName

  const hoursStr = r.hours.map(h => `${h.open} – ${h.close}`).join('　｜　')
  const dayLabels = t('days', { returnObjects: true })

  return (
    <div className="rp-page">

      <div className="rp-hero" style={{ background: gradient }}>

        {/* 左：資訊白卡 */}
        <div className="rp-hero-info">
          <span className="rp-cat-badge">
            {t(`categories.${r.category}`)}
          </span>

          <h1 className="rp-name">{primaryName}</h1>
          <p className="rp-name-eng">{altName}</p>

          <span className={STATUS_CLS[status]}>
            {t(`status.${status}`)}
          </span>

          <hr className="rp-divider" />

          <div className="rp-meta">
            {/* 營業時間 */}
            <div className="rp-meta-row">
              <span className="rp-meta-label">{t('page.hours')}</span>
              <span className="rp-meta-time">{hoursStr}</span>
            </div>

            {/* 營業星期 */}
            <div className="rp-meta-row">
              <span className="rp-meta-label">{t('page.days')}</span>
              <div className="rp-days">
                {dayLabels.map((label, idx) => (
                  <span
                    key={idx}
                    className={`rp-day ${r.days.includes(idx) ? 'rp-day-on' : 'rp-day-off'}`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* 支付方式 */}
            <div className="rp-meta-row">
              <span className="rp-meta-label">{t('page.payment')}</span>
              <div className="rp-payments">
                {r.payment.map(method => <PaymentBadge key={method} method={method} />)}
              </div>
            </div>
          </div>
        </div>

        {/* 右：大字視覺欄 */}
        <div className="rp-hero-visual">
          <span className="rp-hero-big-text">{primaryName}</span>
        </div>
      </div>

      {/* 菜單 */}
      <div className="rp-menu-section">
        <h2 className="rp-menu-title">{t('page.menu')}</h2>
        <div className="rp-menu-grid">
          {r.menu.map(item => <MenuCard key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  )
}

export default RestaurantPage
