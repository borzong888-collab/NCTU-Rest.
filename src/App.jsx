import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import RestaurantPage from './pages/RestaurantPage'
import './App.css'

function App() {
  const [openOnly, setOpenOnly] = useState(false)

  return (
    <div className="app">
      <Header openOnly={openOnly} setOpenOnly={setOpenOnly} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage openOnly={openOnly} />} />
          <Route path="/restaurant/:id" element={<RestaurantPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
