import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Weavestudio',
  description: 'Created with love',
  generator: 'imemyself',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
