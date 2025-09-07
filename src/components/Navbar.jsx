import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'style', label: 'Style' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-neutral-950/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div onClick={() => go('home')} className="cursor-pointer">
         <motion.span
  initial={{ x: -200, opacity: 0, scale: 0.8 }}
  animate={{ x: 0, opacity: 1, scale: 1 }}
  transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
  className="text-3xl font-extrabold gradient-border"
>
  Lăng Minh Hy
</motion.span>


        </div>

        <nav className="hidden md:flex gap-6 text-sm">
          {navItems.map(n => (
            <button key={n.id} onClick={() => go(n.id)} className="transition-colors text-white hover:text-brand-light">{n.label}</button>
          ))}
        </nav>

        <button onClick={() => setOpen(p => !p)} className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10">
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="px-4 py-3 flex flex-col gap-2">
              {navItems.map(n => (
                <button key={n.id} onClick={() => go(n.id)} className="py-2 text-left hover:opacity-80">{n.label}</button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
