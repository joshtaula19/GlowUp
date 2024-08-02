import { useCart } from '../apis/api'

function ShoppingCart() {
  const { data, error, isLoading } = useCart()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
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
            <p>Category ID: {cart.category_id}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingCart
