import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CATEGORIES } from '../data/data'
import './Header.css'

function Header({ openOnly, setOpenOnly }) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  // 每秒更新時間
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 10000)
    return () => clearInterval(timer)
  }, [])

  let d = new Date();
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  let month = (d.getMonth() + 1).toString().padStart(2, '0');
  let date = d.getDate().toString().padStart(2, '0');
  let day = week[d.getDay()];
  let hour = d.getHours().toString().padStart(2, '0');
  const min = d.getMinutes().toString().padStart(2, '0');

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh')
  }

  const handleNavClick = (category) => {
    if (location.pathname !== '/') {
      navigate('/')
    }
    setTimeout(() => {
      const el = document.getElementById(category)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 10)
  }

  return (
    <header className="header">
      {/* left */}
      <div className="header-left">
          <img src="src/assets/logo.png" alt="一直跑掉的LOGO" className="logo" />
          <div className="header-title">
            <div className="title-zh">{t('header.title')}</div>
            <div className="title-en">{t('header.subtitle')}</div>
          </div>
        
      </div>

      {/* middle */}
      <div className="header-center">
        <div className="time-display">
          <span className="time-dot" />
          {month} / {date} ({day})　{hour} : {min}
        </div>

        {/* 僅顯示營業中開關 */}
        <div className="toggle-row">
          <label className="toggle-label">
            <input
              type="checkbox"
              className="toggle-input"
              checked={openOnly}
              onChange={e => setOpenOnly(e.target.checked)}
            />
            <span className="toggle-track">
              <span className="toggle-thumb" />
            </span>
          </label>
          <span className="toggle-text">{t('header.openOnly')}</span>
        </div>

        <div className="legend">
          <div className="legend-item">
            <span className="dot dot-open" />{t('legend.open')}
          </div>
          <div className="legend-item">
            <span className="dot dot-closing" />{t('legend.closing')}
          </div>
          <div className="legend-item">
            <span className="dot dot-closed" />{t('legend.closed')}
          </div>
        </div>
      </div>

      {/* right */}
      <nav className="header-nav">
        {CATEGORIES.map(cat => (
          <button key={cat} className="nav-btn" onClick={() => handleNavClick(cat)}>
            {t(`categories.${cat}`)}
          </button>
        ))}
        <button className="lang-btn" onClick={toggleLang}>
          {i18n.language === 'zh' ? 'EN' : '中'}
        </button>
      </nav>
    </header>
  )
}

export default Header
