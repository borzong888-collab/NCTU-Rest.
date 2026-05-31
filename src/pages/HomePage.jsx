import { useTranslation } from 'react-i18next'
import { restaurants, CATEGORIES, getStatus } from '../data/data'
import RestaurantCard from '../components/RestaurantCard'
import './HomePage.css'

function HomePage({ openOnly }) {
  const { t } = useTranslation()

  const list = openOnly ?
  restaurants.filter(r => getStatus(r) !== 'closed') : restaurants

  return (
    <div className="home-page">

      <p className='note'>
        {t('note.n')}
      </p>

      {CATEGORIES.map(category => {
        const items = list.filter(r => r.category === category)
        if (items.length === 0) {
          return null
        }

        return (
          <section key={category} id={category} className="category-section">
            <h2 className="category-title">{t(`${category}`)}</h2>
            <div className="card-grid">
              {items.map(r => <RestaurantCard key={r.id} restaurant={r} />)}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default HomePage
