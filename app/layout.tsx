import './globals.css'
import { Inter } from 'next/font/google'
import Menu from './components/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'personal coach',
  description: 'Help you get a tech job quick',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} mt-24`}>  
       <Menu/>
       <main>
        {children}
       </main>
      </body>
    </html>
  )
}
