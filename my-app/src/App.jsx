import { useState } from 'react'
import './App.css'
import toursData from './tours.js'
import CreateTour from './tour.jsx'

function App() {
  const [ tours, setTours ] = useState(toursData);

  const removeTourOnClick = (id) => {
      setTours(prev => prev.filter(tour => tour.id !== id))
  }
  const readMe = (id) => {
    setTours(prev => prev.map(tour => tour.id === id ? {...tour, isRead: !tour.isRead} : tour))
  }

  return (
    <>
      <div className='main'>
        <h1>Our Tours</h1>
        <ul className='tours'>
          {tours.map(tour => {
            return (
              <CreateTour key={tour.id} {...tour} removeTourOnClick={removeTourOnClick} readMe={readMe}/>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
