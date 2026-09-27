import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

const SECTIONS = ['home', 'about', 'projects', 'contact']

export default function App() {
  useReveal()

  // The old site used routes like /about; send those visitors to the matching section.
  useEffect(() => {
    const id = window.location.pathname.replace(/^\/|\/$/g, '')
    if (SECTIONS.includes(id)) {
      window.history.replaceState(null, '', `/#${id}`)
      document.getElementById(id)?.scrollIntoView()
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav sections={SECTIONS} />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
