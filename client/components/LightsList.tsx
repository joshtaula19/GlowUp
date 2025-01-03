import React from 'react'
import { useLightsWithCategories } from '../apis/api'
import request from 'superagent'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LightsList: React.FC = () => {
  const { data, error, isLoading } = useLightsWithCategories()
  const [Message, setMessage] = useState<string | null>(null)
  const [DisplayMessage, setDisplayMessage] = useState(false)
  const [SelectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    if (DisplayMessage) {
      setMessage('Added to cart!')
      const timer = setTimeout(() => {
        setDisplayMessage(false)
        setMessage(null)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [DisplayMessage])

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  let filteredLights = data

  if (SelectedCategory) {
    filteredLights = data?.filter(function (light) {
      return light.category_name === SelectedCategory
    })
  }

  const addToCart = async (lightId: number) => {
    try {
      const response = await request.post('/api/v1/cart').send({
        light_id: lightId,
        quantity: 1,
      })
      setDisplayMessage(true)
      console.log('Added to cart:', response)
    } catch (error) {
      console.error('Error adding to cart:', error)
    }
  }

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          width: '100vw',
          textAlign: 'center',
        }}
      >
        {Message && <h1>{Message}</h1>}
      </div>
      <body>
        <div className="header-container">
          <Link to="/">
            <button className="btnHome pill--selected right-side">
              <h1>Home</h1>
            </button>
          </Link>
          <h1>Lighting</h1>
          <Link to="/cart">
            <button className="pill">
              <h1>View Cart 🛒</h1>
            </button>
          </Link>
        </div>
      </body>
      <div>
        <button
          className="pill pill--selected"
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        <button
          className="pill"
          onClick={() => setSelectedCategory('Table Lamp')}
        >
          Table Lamps
        </button>
        <button
          className="pill"
          onClick={() => setSelectedCategory('Floor Lamp')}
        >
          Floor Lamps
        </button>
        <button
          className="pill"
          onClick={() => setSelectedCategory('Overhead Lighting')}
        >
          Overhead Lighting
        </button>
        <button
          className="pill"
          onClick={() => setSelectedCategory('Industrial')}
        >
          Industrial
        </button>
      </div>
      <br></br>
      <ul className="display">
        {filteredLights?.map((light) => (
          <li key={light.id} style={{ marginBottom: '20px' }}>
            <img
              src={light.image_url}
              alt={light.name}
              style={{ width: '300px', height: 'auto', display: 'block' }}
            />
            <Link className="LightName" to={`/lights/${light.id}`}>
              <h2>{light.name}</h2>
            </Link>
            <p>{light.description}</p>
            <p>Status: {light.status}</p>
            <p>Price: ${light.price.toFixed(2)}</p>
            <p>Category: {light.category_name}</p>
            <button
              className="pill pill--selected"
              onClick={() => addToCart(light.id)}
            >
              Add to cart +
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LightsList
