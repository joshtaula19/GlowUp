import React from 'react'
import { useLights } from '../apis/api'
import request from 'superagent'

const LightsList: React.FC = () => {
  const { data, error, isLoading } = useLights()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const addToCart = async (lightId: number) => {
    try {
      const response = await request.post('/api/v1/cart').send({
        light_id: lightId,
        quantity: 1,
      })

      console.log('Added to cart:', response)
    } catch (error) {
      console.error('Error adding to cart:', error)
    }
  }

  return (
    <div>
      <h1>Lights</h1>
      <ul>
        {data?.map((light) => (
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
            <p>Category ID: {light.category_id}</p>
            <button onClick={() => addToCart(light.id)}>Add to cart +</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LightsList
