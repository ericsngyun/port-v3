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
      <div className = "fixed h-screen w-screen bg-black opacity-20 z-20"></div>
      <Image className = "fixed h-screen w-screen opacity-20 -z-10" src = "/tvscreen.png" height = {1000} width = {1000}/>
      <Image className = "fixed h-screen w-screen opacity-10 z-15" src = "/scanlines.png" height = {1000} width = {1000}/>
      <Image className = "tv fixed h-screen w-screen -z-5" src = "/tvstatic2.gif" height = {1000} width = {1000}/>
    </>
  )
}

export default function Home() {
  return (
    <main>
      {/* <div className = "fixed h-screen w-screen scan-lines"></div> */}
      {/* <Overlay/> */}
      <div className = "p-28 h-screen flex">
        <div className = "flex-col">
          {/* <h1 className = "glow lg:text-6xl sm:text-4xl cursor-pointer">
            eric yun &#32;
          </h1>
          <h2 className = "glow lg:text-6xl sm:text-4xl">
            software engineer<span className = "cursor">_</span>
          </h2> */}
          <TypingAnim/>
        </div>
      </div>
    </main>
  )
}
