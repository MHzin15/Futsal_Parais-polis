import { motion } from 'motion/react';
import { Target, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import sanseiImage from 'figma:asset/ab8f59f0a3ae216d2db22558e8a094f053bcdc03.png';
import fernandoImage from 'figma:asset/febe5e1062558e1b58417a268b1e69b6892cada1.png';
import rafaelImage from 'figma:asset/fb9a8ab53f82cd99b45a4f193b6b8c52bc0f214c.png';
import ericImage from 'figma:asset/2d41166f30172d4dff474d3e94202335f9d83f39.png';
import carlinhosImage from 'figma:asset/13008145e66f41bd9e92719f4fc08df5b06449ae.png';
import andreImage from 'figma:asset/f9eedd4db86682f013ba4b17e48a53b217d993ee.png';

export function RosterSection() {
  const players = [
    {
      name: 'Sansei',
      position: 'Pivô',
      number: 10,
      goals: 3,
      assists: 4,
      image: sanseiImage,
    },
    {
      name: 'Fernando Ferraz',
      position: 'Goleiro',
      number: 2,
      goals: 0,
      assists: 1,
      image: fernandoImage,
    },
    {
      name: 'Rafael',
      position: 'Ala',
      number: 9,
      goals: 12,
      assists: 14,
      image: rafaelImage,
    },
    {
      name: 'Eric',
      position: 'Fixo',
      number: 30,
      goals: 2,
      assists: 4,
      image: ericImage,
    },
    {
      name: 'André',
      position: 'Ala',
      number: 6,
      goals: 4,
      assists: 2,
      image: andreImage,
    },
    {
      name: 'Carlinhos',
      position: 'Pivô',
      number: 7,
      goals: 2,
      assists: 2,
      image: carlinhosImage,
    },
  ];

  return (
    <section id="elenco" className="py-24 px-4 bg-[#0A0A0A]">
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
            ELENCO
          </h2>
          <div className="w-24 h-1 bg-[#D4A64A] mx-auto shadow-[0_0_10px_rgba(212,166,74,0.8)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#D4A64A] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-[#1A1A1A] border-2 border-[#D4A64A]/30 overflow-hidden hover:border-[#D4A64A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,166,74,0.4)]">
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-[#0A0A0A]">
                  <img 
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
                  
                  {/* Number Badge */}
                  <div 
                    className="absolute top-4 right-4 w-16 h-16 border-2 border-[#D4A64A] bg-[#0A0A0A]/80 flex items-center justify-center"
                    style={{ 
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '2rem',
                      color: '#D4A64A',
                    }}
                  >
                    {player.number}
                  </div>
                </div>

                {/* Player Info */}
                <div className="p-6">
                  <h3 
                    className="text-[#D4A64A] mb-1"
                    style={{ 
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '1.5rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {player.name}
                  </h3>
                  <p 
                    className="text-gray-400 mb-4"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.875rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {player.position}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#D4A64A]" />
                      <span 
                        className="text-gray-300"
                        style={{ 
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '0.875rem',
                        }}
                      >
                        {player.goals} Gols
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#D4A64A]" />
                      <span 
                        className="text-gray-300"
                        style={{ 
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '0.875rem',
                        }}
                      >
                        {player.assists} Assistências
                      </span>
                    </div>
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