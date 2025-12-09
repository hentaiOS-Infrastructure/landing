import './globals.css'
import { Inter } from 'next/font/google'
import { ConditionalLayout } from './ConditionalLayout'
import { SpeculationRules } from '../components/SpeculationRules'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  let faviconUrl = '/favicon.ico' // Default favicon

  try {
    // Fetch globals from your Payload CMS
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
    const globals = await fetch(`${serverUrl}/api/globals/site-settings`).then(res => res.json())

    if (globals && globals.favicon && globals.favicon.url) {
      faviconUrl = globals.favicon.url
    }
  } catch (error) {
    // Handle fetch error, maybe log it
    console.error('Could not fetch globals for metadata:', error)
  }

  return {
    title: 'helluvaOS',
    description: 'The helluvaOS Project',
    icons: {
      icon: faviconUrl,
    },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ConditionalLayout interClassName={inter.className}>
      {children}
      <SpeculationRules />
    </ConditionalLayout>
  )
}
