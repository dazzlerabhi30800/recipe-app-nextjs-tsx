import type { Metadata } from 'next'
import './globals.css'
import { inter, montserrat } from './fonts'


export const metadata: Metadata = {
  title: 'Recipe App',
  description: 'Recipe App Search your favorite recipes online using this app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  )
}
