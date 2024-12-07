import { Car, Clock, MapPin, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Car,
    title: "Lüks Araçlar",
    description: "En üst segment araçlarla hizmetinizdeyiz"
  },
  {
    icon: Clock,
    title: "7/24 Hizmet",
    description: "Günün her saati yanınızdayız"
  },
  {
    icon: Shield,
    title: "Profesyonel Sürücüler",
    description: "Deneyimli ve lisanslı şoförler"
  },
  {
    icon: MapPin,
    title: "Her Yere Ulaşım",
    description: "Şehir içi ve şehirler arası transfer"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Hizmetlerimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            İhtiyaçlarınıza özel lüks ulaşım çözümleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="p-6 rounded-lg bg-gray-50 hover:bg-black hover:text-white transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <service.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="group-hover:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}