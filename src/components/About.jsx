import React from 'react'
import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 border-t border-white/10">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">Giới thiệu</h2>
          <img 
    src="/src/assets/about.jpg" 
    alt="About Minh Hy" 
    className="mt-4 rounded-2xl border border-white/10 shadow-lg"
  />
        </div>
        <div className="md:col-span-2 text-neutral-300 leading-relaxed ">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            Tôi là Lăng Minh Hy. Với 3 năm kinh nghiệm trong lĩnh vực làm phim ngắn, chụp hình và sản xuất video tự do; và 5 năm cộng tác trong Ban Truyền Thông TGP Sài Gòn.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4"
          >
            Tốt nghiệp Đại học Sân khấu – Điện ảnh, chuyên ngành Đạo diễn điện ảnh. Bắt đầu là videographer freelance, tham gia nhiều dự án nhỏ giúp rèn luyện khả năng thích nghi, sáng tạo và đảm bảo kết quả trong nhiều điều kiện khác nhau.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            Tôi phát triển kỹ năng quay, dựng và kể chuyện, từ nội dung mạng xã hội đến phim ngắn. Đã từng đạo diễn một phim ngắn, tham gia các bộ phận: Director of Photography, Thiết kế mỹ thuật, Assistant Director...; đồng thời đạo diễn & sản xuất một số music video quy mô nhỏ.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
