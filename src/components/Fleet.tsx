import { motion } from 'framer-motion';
import { useState } from 'react';
import { images } from './assets/images';
import BookingModal from './BookingModal';

const vehicles = [
  {
    name: "Mercedes Sprinter",
    image: images.fleet.sprinter,
    capacity: "16 Yolcuya Kadar",
    features: ["Geniş İç Mekan", "Klima", "Konforlu Koltuklar", "Geniş Bagaj"]
  },
  {
    name: "VW Crafter",
    image: images.fleet.crafter,
    capacity: "16 Yolcu Kadar",
    features: ["Yüksek Tavan", "USB Şarj", "Klima", "Geniş Bagaj"]
  },
  {
    name: "Mercedes Vito VIP",
    image: images.fleet.vito,
    capacity: "9 Yolcuya Kadar",
    features: ["VIP Dizayn", "Deri Koltuk", "Buzdolabı", "Özel Aydınlatma"]
  },
  {
    name: "Mercedes Maybach",
    image: images.fleet.maybach,
    capacity: "9 Yolcuya Kadar",
    features: ["Ultra Lüks", "Masaj Koltuğu", "Mini Bar", "Özel Şoför"]
  }
];

export default function Fleet() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Araç Filomuz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lüks araç seçeneklerimizden size en uygun olanı seçin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-gold transition-colors">{vehicle.name}</h3>
                <p className="text-gray-600 mb-4">{vehicle.capacity}</p>
                <ul className="space-y-2">
                  {vehicle.features.map(feature => (
                    <li key={feature} className="flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-2 group-hover:scale-125 transition-transform" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="mt-6 w-full bg-black text-white py-3 rounded-md hover:bg-gold transition-colors duration-300"
                  onClick={() => setSelectedVehicle(vehicle.name)}
                >
                  Rezervasyon Yap
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={!!selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        vehicleName={selectedVehicle || ''}
      />
    </section>
  );
}