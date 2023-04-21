import React from 'react'
import '../app/globals.css'
import Image from 'next/image'

function NavBar() {
  return (
    <div className = "relative w-screen px-20 py-8 h-[15%] glow bg-transparent flex justify-between place-items-center gap-6 z-30 text-3xl">
      <a href = "/">
        <Image href = "/" className = "bg-transparent hover:opacity-100 opacity-70 hover:cursor-pointer z-30" src = "/headmaple.png" height = {100} width = {80}/>
      </a>
      <nav className = "bg-transparent gap-8 flex">
        <a className = "bg-transparent opacity-70 hover:opacity-100 hover:cursor-pointer" href = "/tech" >info</a>
        <a className = "bg-transparent opacity-70 hover:opacity-100 hover:cursor-pointer" href = "/blog" >blog</a>
      </nav>
      <a className = "bg-transparent opacity-70 hover:opacity-100 hover:cursor-pointer" href = "/connect">
        connect
      </a>
    </div>
  )
}

export default NavBar