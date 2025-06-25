import { useState } from 'react'
import './App.css'
import toursData from './tours.js'
import CreateTour from './tour.jsx'

function App() {
  const [ tours, setTours ] = useState(toursData);

  const removeTourOnClick = (id) => {

  }

  return (
    <>
      <div className='main'>
        <h1>Our Tours</h1>
        <ul className='tours'>
          {tours.map(tour => {
            tour.id = crypto.randomUUID();
            return (
              <CreateTour key={tour.id} {...tour}/>
            )
          })}
        </ul>
      </div>
    </>
  )
}

{/* <li className='tour'>
            <img src='https://www.course-api.com/images/tours/tour-1.jpeg'></img>
            <h4>$1000</h4>
            <h2>Best of Paris in 7 Days Tour</h2>
            <p>Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!</p>
            <h3>Read More</h3>
            <button>Not interested</button>
          </li> */}
export default App
