/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import HomePage from './components/HomePage'
import LightsList from './components/LightsList'
import LightsDetail from './components/LightsDetail'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LightsList />}>
      <Route index element={<HomePage />} />
    </Route>,
  ),
)

export default router
