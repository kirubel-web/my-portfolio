import Icon from './Icon'
import Socials from './Socials'
import { profile } from '../data'

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero__photo" data-reveal>
        <img src={profile.photo} alt={profile.name} width="120" height="120" />
      </div>

      <p className="eyebrow" data-reveal>
        <span className="pulse" aria-hidden="true" />
        {profile.role}
      </p>

      <h1 className="hero__title" data-reveal>
        Hi, I&apos;m {profile.firstName}. I build web apps, APIs{' '}
        <span className="gradient-text">and the data behind them.</span>
      </h1>

      <p className="hero__lead" data-reveal>
        I&apos;m a developer who loves solving problems, always learning, experimenting and
        improving. From Django backends to React frontends to Python scrapers, I like taking an idea
        all the way to something that works.
      </p>

      <div className="hero__cta" data-reveal>
        <a href="#projects" className="btn btn--primary">
          View my work <Icon name="arrowRight" size={16} />
        </a>
        <a href={profile.resume} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
          <Icon name="file" size={16} /> Resume
        </a>
      </div>

      <div data-reveal>
        <Socials />
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About">
        <Icon name="arrowDown" size={18} />
      </a>
    </section>
  )
}
