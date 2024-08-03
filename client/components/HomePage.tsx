import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="button-container">
      <Link to="/">
        <button className="pill pill--selected">
          <h1>Home</h1>
        </button>
      </Link>
      <br></br>
      <Link to="/lights">
        <button className="pill">
          <h1>Shop Lamps</h1>
        </button>
      </Link>
      <br></br>
      <Link to="/repairs">
        <button className="pill">
          <h1>Repair Your Lamp</h1>
        </button>
      </Link>
      <br></br>
      <Link to="/cart">
        <button className="pill">
          <h1>View Shopping Cart </h1>
        </button>
      </Link>
    </div>
  )
}

export default HomePage
