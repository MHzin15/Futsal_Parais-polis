import { motion } from 'motion/react';
import { Trophy, Users, Heart } from 'lucide-react';
import teamImage from 'figma:asset/b5a0d24db2ffadbc2e9c89f5ce948c4586385353.png';

export function AboutSection() {
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
            SOBRE NÓS
          </h2>
          <div className="w-24 h-1 bg-[#D4A64A] mx-auto shadow-[0_0_10px_rgba(212,166,74,0.8)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4A64A] blur-3xl opacity-20"></div>
              <div className="relative border-2 border-[#D4A64A] p-2 shadow-[0_0_20px_rgba(212,166,74,0.4)]">
                <img 
                  src={teamImage} 
                  alt="Time Futsal Paraisópolis" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p 
              className="text-gray-300"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: '1.8',
              }}
            >
              O <span className="text-[#D4A64A] font-semibold">Futsal Paraisópolis</span> é mais do que um time de futsal. 
              Somos a representação de uma comunidade vibrante, determinada e apaixonada pelo esporte.
            </p>
            <p 
              className="text-gray-300"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: '1.8',
              }}
            >
              Nascido no coração de Paraisópolis, carregamos a força do leão em cada jogo, 
              unindo talento, garra e o orgulho de nossa origem. Nossa missão é inspirar, 
              competir no mais alto nível e honrar as cores que representam nossa comunidade.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { icon: Trophy, label: 'Excelência' },
                { icon: Users, label: 'União' },
                { icon: Heart, label: 'Paixão' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center border border-[#D4A64A]/30 p-4 bg-[#1A1A1A] hover:border-[#D4A64A] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,166,74,0.3)]"
                >
                  <item.icon className="w-8 h-8 text-[#D4A64A] mx-auto mb-2" />
                  <p 
                    className="text-gray-300"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.875rem',
                    }}
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}