import React from 'react'
import { motion } from 'framer-motion'

const bullets = [
  "Định hướng nghệ thuật: Là một đạo diễn phim tôi chú trọng bố cục, nhịp điệu và cảm xúc trong từng khung hình.",
  "Kể chuyện trên mạng xã hội: Tôi cũng thích ứng với đặc thù nhanh – gọn – hấp dẫn cho TikTok, Facebook, Instagram.",
  "Kỹ năng nhiếp ảnh: Với kinh nghiệm chụp hình, tôi có thể ghi lại những khoảnh khắc tĩnh, hỗ trợ quảng bá cho sản phẩm video.",
  "Thiết kế & truyền tải hình ảnh: Tôi ứng dụng kĩ năng thiết kế cơ bản để tối ưu tính thẩm mỹ, đảm bảo nội dung đồng bộ và ấn tượng trên mọi định dạng.",
  "Cân bằng & linh hoạt: Tôi dung hòa giữa chất lượng điện ảnh và mục tiêu truyền thông, để sản phẩm vừa đẹp mắt vừa gần gũi với khán giả.",
  "Kỹ năng phần mềm: Premiere Pro, DaVinci Resolve, Lightroom, Canva, …",
]

export function StyleSection() {
  return (
    <section id="style" className="py-16 sm:py-24 border-t border-white/10">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">Phong cách</h2>
          <img 
    src="/src/assets/style.jpg" 
    alt="Style Minh Hy" 
    className="mt-4 rounded-2xl border border-white/10 shadow-lg"
  />
        </div>
        <div className="md:col-span-2">
          <ul className="space-y-3 text-neutral-300">
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-3"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-white/60"></span>
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
