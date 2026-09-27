import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer container">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <a href="#home" className="link">
        Back to top ↑
      </a>
    </footer>
  )
}
