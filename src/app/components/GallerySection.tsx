import { motion } from 'motion/react';
import championImage from 'figma:asset/ed2996b818443fb6f3ea252b36942687f9d2abd1.png';
import baseImage from 'figma:asset/8750014d8aaf431c8fab2b2b87373002a422b80b.png';
import jerseyImage from 'figma:asset/37c6d35d1b5f6a98bc4e801cec7e40f565ed89e0.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function GallerySection() {
  const images = [
    {
      url: championImage,
      alt: 'Vice Campeões do Regional',
    },
    {
      url: baseImage,
      alt: 'Anúncio Base',
    },
    {
      url: jerseyImage,
      alt: 'Camisa temp 2026 edição 10 anos',
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-[#D4A64A] mb-4"
            style={{ 
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              letterSpacing: '0.05em',
              textShadow: '0 0 20px rgba(212, 166, 74, 0.5)',
            }}
          >
            GALERIA
          </h2>
          <div className="w-24 h-1 bg-[#D4A64A] mx-auto shadow-[0_0_10px_rgba(212,166,74,0.8)]"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group overflow-hidden aspect-square"
            >
              <div className="absolute inset-0 bg-[#D4A64A] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0"></div>
              <div className="relative border-2 border-[#D4A64A]/30 overflow-hidden h-full hover:border-[#D4A64A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,166,74,0.4)]">
                <ImageWithFallback 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div 
                    className="p-4 text-[#D4A64A]"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.875rem',
                    }}
                  >
                    {image.alt}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}