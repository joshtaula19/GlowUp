/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import HomePage from './components/HomePage'
import LightsList from './components/LightsList'
import RepairPage from './components/RepairPage'
import ShoppingCart from './components/ShoppingCart'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/lights" element={<LightsList />} />
      <Route path="/repairs" element={<RepairPage />} />
      <Route path="/cart" element={<ShoppingCart />} />
    </Route>,
  ),
)

export default router
