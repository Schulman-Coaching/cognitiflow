'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

export function Analytics() {
  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}

// Event tracking helpers
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as Window & { gtag: (...args: unknown[]) => void }).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export function trackContactFormSubmission() {
  trackEvent('submit', 'contact_form', 'Contact Form Submission')
}

export function trackBookingClick() {
  trackEvent('click', 'booking', 'Book Consultation Button')
}

export function trackDemoInteraction(demoType: string) {
  trackEvent('interact', 'demo', demoType)
}

export function trackServicePageView(service: string) {
  trackEvent('view', 'service_page', service)
}
