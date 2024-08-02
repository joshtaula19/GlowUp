import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <Link to="/lights">
        <button>
          <h1>Lamps list</h1>
        </button>
      </Link>
      <Link to="/repairs">
        <button>
          <h1>Repairs page</h1>
        </button>
      </Link>
      <Link to="/cart">
        <button>
          <h1>Shopping Cart</h1>
        </button>
      </Link>
    </div>
  )
}

export default HomePage
