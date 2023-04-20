import React from 'react'
import '../app/globals.css'
import Image from 'next/image'

function NavBar() {
  return (
    <div className = "text-container fixed w-screen px-20 py-8 h-36 glow bg-transparent flex justify-between place-items-center gap-6 z-30 text-3xl">
      <Image href = "/" className = "bg-transparent hover:opacity-100 opacity-60 hover:cursor-pointer z-30" src = "/headmaple.png" height = {100} width = {80}/>
      <div className = "bg-transparent gap-8 flex">
        <a className = "bg-transparent opacity-70 hover:opacity-100 hover:cursor-pointer" href = "/">home</a>
        <a className = "bg-transparent opacity-70 hover:opacity-100 hover:cursor-pointer" href = "/info" >info</a>
        <a className = "bg-transparent opacity-70 hover:opacity-100 hover:cursor-pointer" href = "/blog" >blog</a>
      </div>
      <a href = "/connect">
        connect
      </a>
    </div>
  )
}

export default NavBar