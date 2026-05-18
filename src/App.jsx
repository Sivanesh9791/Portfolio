import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import WhyChoose from './components/WhyChoose'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  // Global fade-in observer — catches any .fade-in element not handled
  // by a component-level observer (e.g. from older sections)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-container">
      <Navbar />

      {/* Home / Hero */}
      <Hero />

      <main className="main-content">
        {/* Services */}
        <Services />

        {/* Portfolio */}
        <Portfolio />

        {/* Testimonials */}
        <Testimonials />

        {/* Why Choose */}
        <WhyChoose />

        {/* About */}
        <About />

        {/* Contact */}
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
