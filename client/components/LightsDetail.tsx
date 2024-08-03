import React from 'react'
import { useLightDetails } from '../apis/api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import request from 'superagent'
import { useState, useEffect } from 'react'

const LightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, error, isLoading } = useLightDetails(Number(id))
  const [DisplayMessage, setDisplayMessage] = useState(false)
  const [Message, setMessage] = useState<string | null>(null)

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

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>No data found</p>

  return (
    <>
      <body>
        <div className="header-container">
          {Message && <h1>{Message}</h1>}
          <Link to="/">
            <button className="btnHome pill--selected right-side">
              <h1>Home</h1>
            </button>
          </Link>
          <h1>{data.name}</h1>
          <Link to="/lights">
            <button className="pill">
              <h1>Back to Lamps</h1>
            </button>
          </Link>
        </div>
      </body>
      <div className="imgDetail">
        <img src={data.image_url} alt={data.name} />
        <p>{data.description}</p>
        <p>Status: {data.status}</p>
        <p>Price: ${data.price}</p>
        <button
          className="pill pill--selected"
          onClick={() => addToCart(light.id)}
        >
          Add to cart +
        </button>
      </div>
    </>
  )
}

export default LightDetail
