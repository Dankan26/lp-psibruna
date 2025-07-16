import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bruna Lavalle - Psicóloga',
  description: 'Atendimento psicológico acolhedor e especializado para ajudar você a lidar com ansiedade, autoestima, relacionamentos e qualidade de vida. Agende sua sessão com a Dra. Bruna Lavalle.',
  generator: 'v0.dev',
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
