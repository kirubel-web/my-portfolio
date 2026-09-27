import { useMemo, useState } from 'react'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { categories, projects } from '../data'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="projects" className="section container">
      <SectionHeading index="02" label="Work" title="Things I've built." />

      <div className="filters" role="group" aria-label="Filter projects" data-reveal>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className="filter"
            aria-pressed={filter === c}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="grid" data-reveal aria-live="polite">
        {visible.map((p, i) => (
          <li key={`${filter}-${p.title}`} className="project card" style={{ '--i': i }}>
            <div className="project__media">
              <img src={p.image} alt="" loading="lazy" decoding="async" width="960" height="480" />
            </div>
            <div className="project__body">
              <p className="project__category mono">{p.category}</p>
              <h3 className="project__title">
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  {p.title}
                  <Icon name="arrowUpRight" size={18} className="project__arrow" />
                </a>
              </h3>
              <p className="project__desc">{p.description}</p>
              <ul className="chips chips--sm" aria-label="Technologies">
                {p.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <p className="more" data-reveal>
        <a href="https://github.com/kirubel-web" target="_blank" rel="noopener noreferrer" className="link">
          More on GitHub <Icon name="arrowUpRight" size={16} />
        </a>
      </p>
    </section>
  )
}
