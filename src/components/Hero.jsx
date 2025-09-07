import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Instagram, Facebook } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="py-16 sm:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight"
          >
            A <span className="gradient-border">Filmmaker</span><br/>Videographer & Photographer
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-neutral-300"
          >
            Chào mừng bạn đến với portfolio của tôi. Là một nhà làm
 phim, chụp hình và quay phim, tôi tin rằng mỗi khung hình
 đều ẩn chứa một câu chuyện. Công việc của tôi là thổi
 hồn vào những câu chuyện đó.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:langminhhy@gmail.com" className="px-4 py-2 rounded-xl border border-white/10 hover:bg-white/5 text-white hover:text-brand-light transition-colors">Email</a>
            <a href="tel:0948159651" className="px-4 py-2 rounded-xl border border-white/10 hover:bg-white/5 text-white hover:text-brand-light transition-colors">Gọi: 0948 159 651</a>
            <a href="https://www.instagram.com/lee_min_han.g/" target="_blank" className="px-4 py-2 rounded-xl border border-white/10 hover:bg-white/5 text-white hover:text-brand-light transition-colors">Instagram</a>
            <a href="https://www.facebook.com/hylang511/" target="_blank" className="px-4 py-2 rounded-xl border border-white/10 hover:bg-white/5 text-white hover:text-brand-light transition-colors">Facebook</a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-500/10 via-white/5 to-transparent border border-white/10 shadow-glow"
        >
          {/* Placeholder visual block. Replace with your portrait or reel thumbnail */}
          <div className="w-full h-full flex items-center justify-center text-neutral-400"><img src="src/assets/avt.jpg" alt="Lăng Minh Hy" className="w-full h-full object-cover rounded-2xl" />
</div>
        </motion.div>
      </div>
    </section>
  )
}
