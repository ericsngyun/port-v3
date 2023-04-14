import { Inter } from 'next/font/google'
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
      <div className = "p-8 h-screen flex justify-center place-items-center">
        <div className = "flex-col">
          <h1 className = "glow text-4xl cursor-pointer text-center">
            Eric Yun
          </h1>
          <h2 className = "glow text-2xl">
            Software Engineer
          </h2>
        </div>
      </div>
    </main>
  )
}
