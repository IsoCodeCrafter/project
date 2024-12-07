import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';
import { useState } from 'react';
import BookingModal from './BookingModal';

const floatingStars = Array(3).fill(null);

export default function Hero() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleContactScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setShowBookingModal(false);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Animated background stars */}
      {floatingStars.map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-gold/30"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Star size={24} />
        </motion.div>
      ))}

      {/* Main background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          initial={{ scale: 1.2, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            backgroundImage: "url(https://img.freepik.com/premium-photo/transporting-service-companys-fleet-delivery-vans-neatly-parked-rows_892776-12570.jpg)",
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center w-full"
        >
          <motion.div
            className="mb-6 relative"
            whileHover={{ scale: 1.02 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-serif mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="block">Premium</span>
              <span className="block text-gold mt-2">Taşımacılık</span>
            </motion.h1>
            <motion.div
              className="absolute -inset-x-10 -inset-y-4 bg-gold/10 rounded-lg -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            />
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Premium araç filomuz ile
            <span className="text-gold"> konfor </span>
            ve
            <span className="text-gold"> şıklığı </span>
            yeniden tanımlıyoruz
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <motion.button
              onClick={() => setShowBookingModal(true)}
              className="w-64 h-14 group relative overflow-hidden bg-gold text-black rounded-md text-lg font-semibold hover:bg-gold/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">
                Hemen Rezervasyon
              </span>
            </motion.button>
            <motion.button
              onClick={handleContactScroll}
              className="w-64 h-14 group relative overflow-hidden border-2 border-white rounded-md text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">
                Şimdi Kirala
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown size={32} className="text-gold" />
          </motion.div>
        </motion.div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          vehicleName="Seçilen Araç"
        />
      )}
    </div>
  );
}