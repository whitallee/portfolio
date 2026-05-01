"use client"

import Link from "next/link";
import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus('sending')
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            })
            if (res.ok) {
                setStatus('sent')
                setName('')
                setEmail('')
                setMessage('')
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    const inputClass = "bg-gray-900 border border-gray-700 focus:border-teal-700 focus:outline-none rounded px-3 py-2 text-white text-base w-full transition-colors"

    return (
        <main className="h-screen max-h-screen flex flex-col items-start justify-start w-full gap-4 pt-16 pr-4 overflow-y-auto pb-16">
            <h2 className="text-2xl sm:text-4xl">reach out anytime</h2>
            <div className="text-xl sm:text-2xl flex flex-col">
                <span className="text-teal-700">.socials <span className="text-white">&#10100;</span></span>
                <span className="indent-12 pb-4">email: <Link href="mailto:whit@whitcodes.dev" className="text-teal-400 text-glow">whit@whitcodes.dev</Link></span>
                <span className="indent-12">github: <Link href="https://github.com/whitallee" className="text-teal-400 text-glow">whitallee</Link></span>
                <span className="indent-12">linkedin: <Link href="https://www.linkedin.com/in/whit-swe/" className="text-teal-400 text-glow">whit-swe</Link></span>
                <span className="text-white">&#10101;</span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-lg text-base">
                <div className="text-teal-700 text-xl sm:text-2xl">.contact_form <span className="text-white">&#10100;</span></div>
                <div className="flex flex-col gap-1 pl-4">
                    <label className="text-gray-400 text-sm">name:</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className={inputClass}
                        placeholder="your name"
                    />
                </div>
                <div className="flex flex-col gap-1 pl-4">
                    <label className="text-gray-400 text-sm">email:</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={inputClass}
                        placeholder="your@email.com"
                    />
                </div>
                <div className="flex flex-col gap-1 pl-4">
                    <label className="text-gray-400 text-sm">message:</label>
                    <textarea
                        required
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        className={inputClass + " resize-none h-32"}
                        placeholder="say hi..."
                    />
                </div>
                <div className="pl-4">
                    <button
                        type="submit"
                        disabled={status === 'sending' || status === 'sent'}
                        className="flex items-center gap-2 border-2 border-teal-800 px-4 py-2 hover-glow disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        <Send size={16} />
                        {status === 'sending' ? 'sending...' : status === 'sent' ? 'sent!' : 'send message'}
                    </button>
                    {status === 'error' && (
                        <p className="text-red-400 text-sm mt-2">Something went wrong — try emailing me directly.</p>
                    )}
                </div>
                <div className="text-white text-xl sm:text-2xl">&#10101;</div>
            </form>
        </main>
    );
}
