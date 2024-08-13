"use client"

import { useRef, useState } from "react"

export default function Home() {

  const [onDarkMode, setOnDarkMode] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function darkMode() {
    setOnDarkMode(!onDarkMode)
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }

  return (
    <div className={`h-screen ${onDarkMode ? "bg-slate-900" : "bg-slate-300"} flex justify-center items-center`} >
      <img src="bulb.svg" alt="" className={`${!onDarkMode ? "hidden" : "block drop-shadow-[-5px_7px_10px_yellow]"} w-10 relative mr-24 mb-16 cursor-pointer`} onClick={darkMode} />
      <img src="lamp.svg" alt="" className="absolute w-40 cursor-pointer" onClick={darkMode} />
      <audio ref={audioRef} src="mouse-click.mp3"></audio>
    </div>
  )
}