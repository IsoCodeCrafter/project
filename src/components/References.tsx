import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const references = [
  {
    name: "Turkish Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Turkish_Airlines_logo_2019_compact.svg/2560px-Turkish_Airlines_logo_2019_compact.svg.png"
  },
  {
    name: "Pegasus Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Pegasus_Airlines_logo_2019.svg/2560px-Pegasus_Airlines_logo_2019.svg.png"
  },
  {
    name: "Hilton Hotels",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Hilton_Hotels_%26_Resorts_logo.svg/2560px-Hilton_Hotels_%26_Resorts_logo.svg.png"
  },
  {
    name: "Marriott Hotels",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Marriott_International_logo.svg/2560px-Marriott_International_logo.svg.png"
  },
  {
    name: "Sheraton Hotels",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Sheraton_Hotels_and_Resorts_logo.svg/2560px-Sheraton_Hotels_and_Resorts_logo.svg.png"
  },
  {
    name: "Swissotel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Swissotel_logo.svg/2560px-Swissotel_logo.svg.png"
  },
  {
    name: "Rixos Hotels",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Rixos_Hotels_logo.svg/2560px-Rixos_Hotels_logo.svg.png"
  },
  {
    name: "Detur",
    logo: "https://www.detur.com.tr/assets/images/logo.png"
  },
  {
    name: "Anex Tour",
    logo: "https://www.anextour.com.tr/assets/images/logo.png"
  },
  {
    name: "ETS Tur",
    logo: "https://www.etstur.com/assets/images/logo.png"
  }
];

export default function References() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (references.length - 4));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="references" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif mb-4">Referanslarımız</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Güvenilir iş ortaklarımız ve mutlu müşterilerimiz
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {references.slice(currentIndex, currentIndex + 5).map((reference, index) => (
            <motion.div
              key={reference.name}
              className="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-24 flex items-center justify-center">
                <img
                  src={reference.logo}
                  alt={reference.name}
                  className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
              <p className="text-center mt-4 text-sm text-gray-600 group-hover:text-gold transition-colors">
                {reference.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}