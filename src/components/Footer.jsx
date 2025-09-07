import React from 'react'

export function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} Lăng Minh Hy</span>
        <span>Filmmaker • Videographer • Photographer</span>
      </div>
    </footer>
  )
}
