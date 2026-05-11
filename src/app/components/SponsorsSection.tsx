import { motion } from 'motion/react';

export function SponsorsSection() {
  const sponsors = [
    { name: 'Mattos Calçados e Confecções', logo: 'M' },
    { name: 'Elewe Sports', logo: 'E' },
    { name: 'Cyber Games', logo: 'CG' },
    { name: 'Sponsor 4', logo: 'S4' },
    { name: 'Sponsor 5', logo: 'S5' },
  ];

  return (
    <section className="py-24 px-4 bg-[#1A1A1A] relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A64A] to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A64A] to-transparent opacity-50"></div>

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
            PATROCINADORES
          </h2>
          <div className="w-24 h-1 bg-[#D4A64A] mx-auto shadow-[0_0_10px_rgba(212,166,74,0.8)]"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#D4A64A] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-[#0A0A0A] border-2 border-[#D4A64A]/30 aspect-square flex items-center justify-center hover:border-[#D4A64A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,166,74,0.4)]">
                <div 
                  className="text-[#D4A64A]"
                  style={{ 
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {sponsor.logo}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
