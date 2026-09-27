import { useEffect, useState } from 'react'
import Icon from './Icon'
import useTheme from '../hooks/useTheme'
import useActiveSection from '../hooks/useActiveSection'
import { profile } from '../data'

const LABELS = { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact' }

export default function Nav({ sections }) {
  const [theme, toggleTheme] = useTheme()
  const active = useActiveSection(sections)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}>
      <div className="nav__inner container">
        <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
          {profile.firstName}
          <span className="accent">.</span>
        </a>

        <nav aria-label="Primary">
          <ul className="nav__links" id="nav-links">
            {sections.slice(1).map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {LABELS[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <button
            type="button"
            className="icon-btn nav__menu"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label="Menu"
          >
            <Icon name={open ? 'close' : 'menu'} size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
