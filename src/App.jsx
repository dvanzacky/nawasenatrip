import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Trips from './components/Trips'
import Experiences from './components/Experiences'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <div id="destinations">
        <Hero />
      </div>

      <div id="about">
        <Mission />
      </div>

      <div id="trips">
        <Trips />
      </div>

      <div id="experiences">
        <Experiences />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="contact" className="mt-20">
        <Footer />
      </div>
    </div>
  )
}