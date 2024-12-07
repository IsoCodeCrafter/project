import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">İletişim</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            7/24 hizmetinizdeyiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif mb-6">Bize Ulaşın</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-gold mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Telefon</h4>
                  <p className="text-gray-400">+90 (555) 123 4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-gold mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">E-posta</h4>
                  <p className="text-gray-400">info@kircamitasimacilik.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-gold mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Adres</h4>
                  <p className="text-gray-400">Kırçami Mahallesi<br />Antalya, Türkiye</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="block text-sm font-medium mb-2">Ad Soyad</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Adınız Soyadınız"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Telefon</label>
              <input
                type="tel"
                className="w-full px-4 py-3 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Telefon Numaranız"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">E-posta</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="E-posta adresiniz"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mesaj</label>
              <textarea
                className="w-full px-4 py-3 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-gold h-32"
                placeholder="Mesajınız"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gold text-black py-3 rounded-md hover:bg-gold/90 transition-colors font-semibold"
            >
              Gönder
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}