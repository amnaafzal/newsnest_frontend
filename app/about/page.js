'use client'

import React from 'react'
import Link from 'next/link'
import { useTheme } from '../context/themeContext'

const About = () => {

    const {isDarkMode} = useTheme()
  return (
    <div className={`min-h-screen px-6 md:px-20 py-10 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'text-gray-900 bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 border-b-2 border-blue-500 inline-block">About NewsNest</h1>

        <p className="text-lg mb-6">
          <strong>NewsNest</strong> is a modern and responsive news aggregator that collects headlines from leading Pakistani news channels — including Dawn, Tribune, The International News, and Daily Times — and presents them in one clean interface.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">📌 Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Latest headlines from four popular news channels</li>
            <li>Save and manage your own notes for any news</li>
            <li>Dark and light mode toggle</li>
            <li>Mobile responsive and fast-loading design</li>
            <li>Modern UI with smooth user experience</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🛠️ Tech Stack</h2>
          <p>
            Built with <span className="font-semibold">Next.js, React, Tailwind CSS</span> and love 💙. NewsNest also uses modern React Hooks like <code>useState</code>, <code>useEffect</code>, and context API for theme switching.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">👩‍💻 About the Developer</h2>
          <p>
            {`Hi, I'm `}<span className="font-bold">Amna Afzal</span>, a Computer Science student passionate about web development. NewsNest is a reflection of my journey into building useful, real-world applications using modern web technologies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🚀 How to Use</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Select a news channel on the homepage</li>
            <li>Browse the latest headlines</li>
            <li>Click the 📝 icon to save a note with your thoughts</li>
            <li>Manage your notes in the "My Notes" section</li>
            <li>Use the moon/sun icon in the navbar to switch theme</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">📬 Contact</h2>
          <p>
            For any suggestions or feedback, feel free to email me at{' '}
            <a href="mailto:amnaafzal605@gmail.com" className="text-blue-500 underline">amnaafzal605@gmail.com</a>.
          </p>
        </section>

        <Link href="/" className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export default About

