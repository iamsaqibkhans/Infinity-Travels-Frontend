import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [departures, setDepartures] = useState([])

  useEffect(() => {
    axios.get('https://cdn.contentful.com/spaces/wcob8kix6id4/environments/master/entries?access_token=NiGt1sEeyQ71YC6326g_dovKJLJs3163fvlvZHtI02E&content_type=fixed')
      .then(res => {
        const items = res.data.items.map(item => item.fields)
        setDepartures(items)
      })
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>Fixed Departures</h1>
      <ul>
        {departures.map((item, i) => (
          <li key={i}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <strong>Price:</strong> ₹{item.price} <br />
            <strong>Departure:</strong> {new Date(item.departureDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  )
}
