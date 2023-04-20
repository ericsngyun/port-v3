import React from 'react'
import '../app/globals.css'

function NavBar() {
  return (
    <div className = "text-container fixed w-screen px-20 py-6 h-20 glow bg-transparent flex justify-center gap-6 z-30 text-2xl">
      <a className = "bg-transparent" href = "/home">home</a>
      <a className = "bg-transparent" href = "/info" >info</a>
      <span className = "triangle"></span>
      <a></a>
    </div>
  )
}

export default NavBar