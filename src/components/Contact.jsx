import { useEffect, useState } from 'react'
import Icon from './Icon'
import Socials from './Socials'
import SectionHeading from './SectionHeading'
import { profile } from '../data'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section container">
      <SectionHeading index="03" label="Contact" title="Let's build something together." />

      <div className="contact card" data-reveal>
        <p className="contact__lead">
          Have a project, a role, or just a question? My inbox is open and I&apos;ll get back to you.
        </p>

        <div className="contact__actions">
          <a href={`mailto:${profile.email}`} className="btn btn--primary btn--lg">
            <Icon name="mail" size={18} /> {profile.email}
          </a>
          <button type="button" className="btn btn--ghost" onClick={copyEmail}>
            <Icon name={copied ? 'check' : 'copy'} size={16} />
            <span aria-live="polite">{copied ? 'Copied!' : 'Copy email'}</span>
          </button>
        </div>

        <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact__phone link">
          <Icon name="phone" size={16} /> {profile.phone}
        </a>

        <Socials className="socials--center" />
      </div>
    </section>
  )
}
