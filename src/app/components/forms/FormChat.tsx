'use client'

import { useChat } from '@ai-sdk/react'
import { useState, useRef } from 'react'
import { UserRound, Bot } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

export default function FormChat() {
  const { messages, sendMessage } = useChat({
    onError: (error) => {
      console.log('error: ', error)
      setError(error.toString())
    },
  })

  const [error, setError] = useState('')
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      const form = e.currentTarget.form
      if (form && input.trim()) form.requestSubmit()
    }
  }

  async function handleChat(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!input.trim()) return

    try {
      setIsLoading(true)
      await sendMessage({ text: input })
      setInput('')
    } catch (err: any) {
      console.log('error: ', err)
      setError(err.toString())
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full flex justify-end">
      <div className="w-full max-w-4xl">

        {/* Messages */}
        {messages && messages.length > 0 && (
          <div className="flex flex-col gap-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-3 p-2 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {/* Message bubble */}
                {message.parts.map((part, i) => {
                  if (part.type !== 'text') return null
                  return (
                    <div
                      key={i}
                      className={`p-3 rounded-md max-w-[70%] text-[var(--foreground)] ${
                        message.role === 'user'
                          ? 'bg-[var(--button-background)] text-right'
                          : 'bg-[var(--form-background)]'
                      }`}
                    >
                      <ReactMarkdown>{part.text}</ReactMarkdown>
                    </div>
                  )
                })}

                {/* Avatar */}
                <div
                  className={`h-10 w-10 rounded-full border flex items-center justify-center ${
                    message.role === 'user'
                      ? 'bg-[var(--button-background)] order-last'
                      : 'bg-[var(--form-background)] order-first'
                  }`}
                >
                  {message.role === 'user' ? <UserRound /> : <Bot />}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleChat} className="flex flex-col gap-3 mt-4">
          <textarea
            placeholder="What do you want to know?"
            className="w-full p-3 border rounded resize-none bg-[var(--form-background)] text-[var(--foreground)]"
            onKeyDown={handleKeyDown}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          {error && <div className="text-red-600">{error}</div>}

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 rounded bg-[var(--button-background)] text-[var(--foreground)] hover:bg-[var(--button-hover)] transition"
            >
              {isLoading ? 'Thinking…' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
