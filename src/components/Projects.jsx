import React from 'react'
import { motion } from 'framer-motion'

const works = [
  {
    title: "Thế Giới Tận Cùng",
    role: "ĐẠO DIỄN - SẢN XUẤT",
    desc: "Phim ngắn đầu tay, được tài trợ bởi HK Film và Ban Truyền Thông TGP Sài Gòn. Hoàn thiện 01/2025, đang tranh cử tại các LHP ngắn.",
    link: null,
    img: "/src/assets/thegioitancung.jpg"
  },
  {
    title: "Madonnina",
    role: "ĐẠO DIỄN HÌNH ẢNH - ĐỒNG ĐẠO DIỄN",
    desc: "Phim ngắn.",
    link: "https://youtu.be/4R0G7RBN9HQ?si=W_ZPSHKYZXBRNYKG",
    img: "/src/assets/madonia.jpg"
  },
  {
    title: "Đứa Trẻ",
    role: "DIRECTOR - PRODUCER",
    desc: "Phim ngắn.",
    link: "https://www.youtube.com/watch?v=WTIKZ9X9D9C",
    img: "/src/assets/duabe.jpg"
  },
  {
    title: "Há Pressa no Ar",
    role: "PHOTOGRAPHER - ASSISTANT PRODUCER",
    desc: "Music video.",
    link: "https://www.facebook.com/profile.php?id=61560078023466",
    img: "/src/assets/hapres.jpg"
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-white/10 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Cột trái tiêu đề */}
        <div className="md:col-span-1 flex justify-center items-start">
  <h2 className="text-3xl font-bold bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
    Dự án nổi bật
  </h2>
</div>


        {/* Cột phải danh sách project */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          {works.map((w, i) => (
            <motion.article
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="group rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/40 hover:shadow-xl hover:shadow-brand-dark/20 transition-all duration-500"
            >
              {/* Ảnh thumbnail */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative"
              >
                <motion.img 
                  src={w.img} 
                  alt={w.title} 
                  className="aspect-video w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Overlay màu khi hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Nội dung */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-white ">
                  {w.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">{w.role}</p>
                <p className="text-sm text-neutral-300 mt-2">{w.desc}</p>
                {w.link && (
                  <a 
  href={w.link} 
  target="_blank" 
  className="inline-block mt-3 text-sm font-medium text-white hover:text-brand-light transition-colors"
>
  Xem chi tiết →
</a>

                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
