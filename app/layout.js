import Image from 'next/image'
import './globals.css'
import { Overlay } from './page'
import Marquee from '@/components/Marquee'
import NavBar from '@/components/NavBar'

export const metadata = {
  title: 'ericyun.dev',
  description: 'this is my port/blog',
}

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body>
        <Overlay/>
        <NavBar/>
        {/* <NavBar/> */}
        {children}
      </body>
    </html>
  )
}
