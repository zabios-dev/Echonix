'use client'

import { useEffect } from 'react'

/** Resolve a semantic location label from the clicked element's closest landmark. */
function getLocation(el: Element): string {
  if (el.closest('nav, [class*="navbar"]')) return 'navbar'
  if (el.closest('footer, [class*="footer"]')) return 'footer'
  if (el.closest('[class*="final-cta"], [id="contact"]')) return 'cta_banner'
  if (el.closest('[class*="midcta"], [class*="mid-cta"]')) return 'cta_banner'
  if (el.closest('[class*="floating-wa"]')) return 'footer'
  if (el.closest('[class*="location"], [class*="LocationPage"]')) return 'location_page'
  if (el.closest('section:first-of-type, [class*="hero"]')) return 'hero'
  return 'hero'
}

/** Resolve branch from footer map links (Tirur = first branch, Kozhikode = second). */
function getBranch(href: string, el: Element): string | undefined {
  if (!href.includes('maps.app.goo.gl') && !href.includes('google.com/maps')) return undefined
  // Footer branch blocks carry a data-branch attribute set by the footer markup,
  // or fall back to URL matching the two known map slugs.
  const branchBlock = el.closest('[data-branch]')
  if (branchBlock) return (branchBlock as HTMLElement).dataset.branch
  // Fallback: Tirur map slug vs Kozhikode map slug
  if (href.includes('UGgr2VUAZdg4TGLMA')) return 'tirur'
  if (href.includes('uXpnNkPsss4np3gV7')) return 'kozhikode'
  return undefined
}

function fireGtag(event: string, params: Record<string, string | undefined>) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    // Strip undefined keys so GA4 payload is clean
    const clean = Object.fromEntries(
      Object.entries(params).filter(([, v]) => v !== undefined)
    )
    ;(window as any).gtag('event', event, { transport_type: 'beacon', ...clean })
  }
}

export default function ConversionTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href') ?? ''

      const link_location = getLocation(anchor)
      const page_path = window.location.pathname

      if (href.startsWith('https://wa.me') || href.startsWith('https://api.whatsapp.com')) {
        fireGtag('whatsapp_click', { link_location, page_path })
      } else if (href.startsWith('tel:')) {
        fireGtag('call_click', { link_location, page_path })
      } else if (href.includes('google.com/maps') || href.includes('maps.app.goo.gl')) {
        const branch = getBranch(href, anchor)
        fireGtag('directions_click', { link_location, page_path, branch })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // Fire quote_form_submit after successful form submit (delegated via custom event)
  useEffect(() => {
    const handleFormSuccess = () => {
      fireGtag('quote_form_submit', { page_path: window.location.pathname })
    }
    document.addEventListener('echonix:quote_submitted', handleFormSuccess)
    return () => document.removeEventListener('echonix:quote_submitted', handleFormSuccess)
  }, [])

  return null
}
