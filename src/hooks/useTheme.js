import { useCallback, useState } from 'react'

// index.html sets data-theme before first paint; this hook just reads and flips it.
export default function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.dataset.theme = next
      try {
        localStorage.setItem('theme', next)
      } catch {
        // Storage can be unavailable (private mode); the toggle still works for this visit.
      }
      return next
    })
  }, [])

  return [theme, toggle]
}
