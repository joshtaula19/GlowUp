import React from 'react'
import { useLights } from '../apis/api'

const LightsList: React.FC = () => {
  const { data, error, isLoading } = useLights()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

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
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LightsList
