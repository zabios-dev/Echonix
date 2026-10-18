import { useEffect, useState } from 'react'

export function useIsMobile(breakpoint = 768) {
  // Always start false to match the server's SSR output.
  // useEffect runs only on the client after hydration, so the
  // correction happens without causing a hydration mismatch.
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const handler = (e) => setIsMobile(e.matches)
    setIsMobile(mq.matches)           // sync to real viewport immediately
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [breakpoint])

  return isMobile
}
