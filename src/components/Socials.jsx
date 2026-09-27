import Icon from './Icon'
import { socials } from '../data'

export default function Socials({ className = '' }) {
  return (
    <ul className={`socials ${className}`}>
      {socials.map(({ label, icon, href }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
            <Icon name={icon} size={18} />
          </a>
        </li>
      ))}
    </ul>
  )
}
