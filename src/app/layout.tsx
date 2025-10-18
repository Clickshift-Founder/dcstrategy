import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dominion City - 100 Million Souls Campaign | Night of Glory 2025',
  description: 'Strategic platform for Dominion City\'s 100 Million Souls mandate and Night of Glory conference on November 28, 2025 at MKO Abiola Stadium, Abuja.',
  keywords: 'Dominion City, 100 Million Souls, Night of Glory, Abuja, Pastor David Ogbueli, evangelism, church growth, soul winning',
  authors: [{ name: 'Dominion City' }],
  openGraph: {
    title: 'Dominion City - 100 Million Souls Campaign',
    description: 'Join us for Night of Glory 2025 and be part of the 100 Million Souls movement',
    type: 'website',
    url: 'https://www.dominioncity.cc',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
