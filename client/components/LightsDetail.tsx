import React from 'react'
import { useLightDetails } from '../apis/api'
import { useParams } from 'react-router-dom'

const LightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, error, isLoading } = useLightDetails(Number(id))

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>No data found</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <img
        src={data.image_url}
        alt={data.name}
        style={{ width: '100px', height: 'auto', display: 'block' }}
      />
      <p>{data.description}</p>
      <p>Status: {data.status}</p>
      <p>Price: ${data.price}</p>
    </div>
  )
}

export default LightDetail
