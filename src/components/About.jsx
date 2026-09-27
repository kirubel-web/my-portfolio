import SectionHeading from './SectionHeading'
import { projects, skills } from '../data'

export default function About() {
  const stacks = new Set(projects.flatMap((p) => p.tags)).size

  return (
    <section id="about" className="section container">
      <SectionHeading index="01" label="About" title="A developer who likes shipping." />

      <div className="about">
        <div className="about__text" data-reveal>
          <p>
            I build web apps, design APIs and optimize databases. Most of my work lives on the
            backend with Python and Django, but I&apos;m just as happy wiring up a React interface
            or automating a tedious job with a scraper.
          </p>
          <p>
            I learn by building. Every project below started as a question: how does booking work,
            how do REST APIs fit together, how do you pull clean data out of a messy site. I&apos;m
            always learning, experimenting and improving.
          </p>
          <p>Let&apos;s create something amazing together.</p>

          <dl className="stats">
            <div>
              <dt>Projects on GitHub</dt>
              <dd>{projects.length}</dd>
            </div>
            <div>
              <dt>Technologies used</dt>
              <dd>{stacks}</dd>
            </div>
          </dl>
        </div>

        <div className="about__skills card" data-reveal>
          <h3 className="card__title">Toolkit</h3>
          {skills.map(({ group, items }) => (
            <div key={group} className="skill-group">
              <h4>{group}</h4>
              <ul className="chips">
                {items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
