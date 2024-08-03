import React from 'react'
import { useLightsWithCategories } from '../apis/api'
import request from 'superagent'
import { useState, useEffect } from 'react'

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
      <h1>Lights</h1>
      <div>
        <button onClick={() => setSelectedCategory(null)}>All</button>
        <button onClick={() => setSelectedCategory('Table Lamp')}>
          Table Lamps
        </button>
        <button onClick={() => setSelectedCategory('Floor Lamp')}>
          Floor Lamps
        </button>
        <button onClick={() => setSelectedCategory('Overhead Lighting')}>
          Overhead Lighting
        </button>
        <button onClick={() => setSelectedCategory('Industrial')}>
          Industrial
        </button>
      </div>
      <ul>
        {filteredLights?.map((light) => (
          <li key={light.id} style={{ marginBottom: '20px' }}>
            <img
              src={light.image_url}
              alt={light.name}
              style={{ width: '100px', height: 'auto', display: 'block' }}
            />
            <h2>{light.name}</h2>
            <p>{light.description}</p>
            <p>Status: {light.status}</p>
            <p>Price: ${light.price.toFixed(2)}</p>
            <p>Category: {light.category_name}</p>
            <button onClick={() => addToCart(light.id)}>Add to cart +</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LightsList
