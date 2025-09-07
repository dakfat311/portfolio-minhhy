import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { StyleSection } from './components/StyleSection'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-display">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <Hero />
        <About />
        <StyleSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
