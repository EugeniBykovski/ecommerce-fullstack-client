import '../../styles/globals.css'

export const metadata = {
  title: 'E-commerce Store',
  description: 'e-commerce next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
