import React from 'react'
import { motion } from 'framer-motion'

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-white/10">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex justify-center items-start">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">Liên hệ</h2>
        </div>
        <div className="md:col-span-2">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-neutral-400">Điện thoại</p>
              <a href="tel:0948159651" className="mt-1 inline-block text-lg">0948 159 651</a>
            </div>
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-neutral-400">Email</p>
              <a href="mailto:langminhhy@gmail.com" className="mt-1 inline-block text-lg">langminhhy@gmail.com</a>
            </div>
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-neutral-400">Instagram</p>
              <a target="_blank" href="https://www.instagram.com/lee_min_han.g/" className="mt-1 inline-block text-lg">lee_min_han.g</a>
            </div>
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-neutral-400">Facebook</p>
              <a target="_blank" href="https://www.facebook.com/hylang511/" className="mt-1 inline-block text-lg">hylang511</a>
            </div>
          </div>
          <p className="text-neutral-400 text-sm mt-6">Mỗi dự án đều xứng đáng được nhìn thấy. Tôi rất mong chờ để được lắng nghe và cùng bạn tạo nên một sản phẩm thật sự có giá trị.</p>
        </div>
      </div>
    </section>
  )
}
