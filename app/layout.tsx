import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bruna Lavalle - Psicóloga',
  description: 'Psicóloga especializada em saúde emocional, autoestima e relacionamentos.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
