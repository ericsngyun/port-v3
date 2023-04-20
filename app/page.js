import TypingAnim from '@/components/TypingAnim'
import { Inter } from 'next/font/google'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })


function LoadingScreen() {
  
  return (
    <div>
      
    </div>
  )
}


function TopSection() {
  
  return (
    <>
      <div className = "">

      </div>
    </>
  )
}

function Nav() {
  
  return (
    <>  
      <div className = "flex-col">

      </div>
    </>
  )
}

export function Overlay() {

  return (
    <>
      <div className = "fixed h-screen w-screen bg-black opacity-0 z-20"></div>
      {/* <Image className = "fixed h-screen w-screen opacity-10 z-10" src = "/tvscreen.png" height = {1000} width = {1000}/> */}
      <Image className = "fixed h-screen w-screen opacity-20 z-15" src = "/scanlines.png" height = {1000} width = {1000}/>
      <Image className = "tv fixed h-screen w-screen z-25" src = "/tvstatic2.gif" height = {1000} width = {1000}/>
    </>
  )
}

export default function Home() {
  return (
    <main>
      {/* <div className = "fixed h-screen w-screen scan-lines"></div> */}
      {/* <Overlay/> */}
      <div className = "lg:p-28 md:p-16 sm:p-14 h-screen w-screen grid place-items-center">
        <TypingAnim/>
      </div>
    </main>
  )
}
