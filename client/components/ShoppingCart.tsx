import { useCart } from '../apis/api'
import request from 'superagent'
import { useState, useEffect } from 'react'

function ShoppingCart() {
  const { data, error, isLoading } = useCart()
  const [Cart, setCart] = useState(false)

  useEffect(() => {
    if (Cart) {
      window.location.reload()
    }
  }, [Cart])

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const deleteFromCart = async (lightId: number) => {
    try {
      const response = await request
        .delete('/api/v1/cart')
        .send({ light_id: lightId })
      setCart(true)
      console.log('Removed from cart:', response)
    } catch (error) {
      console.error('Error removing from cart:', error)
    }
  }

  return (
    <div>
      <h1> My Cart:</h1>

      <ul>
        {data?.map((cart) => (
          <li key={cart.cart_id} style={{ marginBottom: '20px' }}>
            <img
              src={cart.image_url}
              alt={cart.name}
              style={{ width: '100px', height: 'auto', display: 'block' }}
            />
            <h2>{cart.name}</h2>
            <p>{cart.description}</p>
            <p>Status: {cart.status}</p>
            <p>Price: ${cart.price.toFixed(2)}</p>
            <p>Category: {cart.category_name}</p>
            <button onClick={() => deleteFromCart(cart.light_id)}>
              Remove from cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingCart
