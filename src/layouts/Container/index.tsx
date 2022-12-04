import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

export function Container() {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  )
}
