import Image from 'next/image'
import './globals.css'
import { Overlay } from './page'

export const metadata = {
  title: 'ericyun',
  description: 'this is my port/blog',
}

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body>
        <Overlay/>
        {children}
      </body>
    </html>
  )
}
