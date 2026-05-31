import { useTranslation } from 'react-i18next'
import './MenuCard.css'

// 菜單卡片：只顯示名稱與價格（已移除描述）
function MenuCard({ item }) {
  const { t } = useTranslation()

  return (
    <div className="menu-card">
      <div className="menu-card-top">
        <span className="menu-name">{item.name}</span>
        <span className="menu-price">{t('page.price')} {item.price}</span>
      </div>
    </div>
  )
}

export default MenuCard
