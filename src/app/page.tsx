'use client'

import Default from './templates/Default'
import FormChat from '@/app/components/forms/FormChat'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const messages = [
    "Tara, Study Tayo?",
    "Need help with notes?",
    "Let's do this together!",
    "Ask me anything!",
  ]

  const [currentMessage, setCurrentMessage] = useState(messages[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => {
        const currentIndex = messages.indexOf(prev)
        const nextIndex = (currentIndex + 1) % messages.length
        return messages[nextIndex]
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Default className="w-full h-screen flex flex-col px-0">

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row h-full">

        {/* Left panel: robot and animated text */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-start p-6 flex-shrink-0">
          <div className="w-full max-w-md h-[400px] md:h-[500px] relative shadow-2xl rounded-xl overflow-hidden">
          <Image
            src="/robot.gif"
            alt="Study Buddy Robot"
            width={500}
            height={500}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

          {/* Added more spacing between GIF and text */}
         <p className="mt-16 text-center text-2xl md:text-4xl text-[var(--foreground)] animate-bounce font-bold">
          {currentMessage}
        </p>
        </div>

        {/* Right panel: welcome message and full-width chat input */}
        <div className="w-full md:flex-1 flex flex-col justify-between px-4 md:px-6">

          {/* Welcome message */}
          <div className="text-center mt-35 md -0">
            <h1 className="text-4xl md:text-5xl font-bold">Hello, Guest!</h1>
            <p className="mt-10 text-lg md:text-xl md-2">
              Welcome to Study Buddy!{" "}
              <a className="underline" href="/signup">
                Create your free account
              </a>{" "}
              and upload your notes to get instant AI-powered study help.
            </p>
          </div>

          {/* Chat input: full width and aligned */}
          <div className="mt-2 md:mt-4 flex-grow flex items-end justify-center mb-28">
            <div className="w-full">
              <FormChat />
            </div>
          </div>
        </div>
      </div>
    </Default>
  )
}
