export default function SectionHeading({ index, label, title }) {
  return (
    <header className="section__head" data-reveal>
      <p className="section__label">
        <span className="mono">{index}</span> {label}
      </p>
      <h2 className="section__title">{title}</h2>
    </header>
  )
}
