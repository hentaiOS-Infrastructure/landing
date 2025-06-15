import './globals.css'
import { Inter } from 'next/font/google'
import { ConditionalLayout } from './ConditionalLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'helluvaOS',
  description: 'The helluvaOS Project', // You can refine this
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ConditionalLayout interClassName={inter.className}>
      {children}
    </ConditionalLayout>
  )
}
