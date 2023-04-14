import { Inter } from 'next/font/google'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })


function LoadingScreen() {
  
  return (
    <div>
      
    </div>
  )
}

export default function Home() {
  return (
    <main>
      {/* <div className = "fixed h-screen w-screen scan-lines"></div> */}
      <Image className = "fixed h-screen w-screen opacity-25 z-15" src = "/scanlines.png" height = {1000} width = {1000}/>
      <Image className = "tv fixed h-screen w-screen -z-10" src = "/tvstatic2.gif" height = {1000} width = {1000}/>
      <div className = "p-8 h-screen flex justify-center place-items-center">
        <div className = "flex-col">
          <h1 className = "glow text-5xl cursor-pointer text-center">
            _eric_yun
          </h1>
          <h2 className = "glow text-5xl">
            _software_engineer
          </h2>
        </div>
      </div>
    </main>
  )
}
