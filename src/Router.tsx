import { Route, Routes } from 'react-router-dom'
import { Container } from './layouts/Container'
import { Calculadora } from './pages/Calculadora'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora" element={<Calculadora />} />
      </Route>
    </Routes>
  )
}
