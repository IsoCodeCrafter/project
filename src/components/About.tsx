import { motion } from 'framer-motion';
import { Heart, Shield, Star, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif mb-4">Hakkımızda</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            20 yıllık tecrübemizle sizlere en iyi hizmeti sunuyoruz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4">
              <div className="bg-gold/10 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Güvenilir Hizmet</h3>
                <p className="text-gray-600">20 yıldır sektörde güvenle hizmet veriyoruz. Müşteri memnuniyeti bizim için her şeyden önemli.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-gold/10 p-3 rounded-lg">
                <Heart className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Samimi Yaklaşım</h3>
                <p className="text-gray-600">Yerel bir firma olarak, müşterilerimizle samimi ve içten bir ilişki kuruyoruz.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-gold/10 p-3 rounded-lg">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Profesyonel Ekip</h3>
                <p className="text-gray-600">Deneyimli ve profesyonel ekibimizle en iyi hizmeti sunuyoruz.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-gold/10 p-3 rounded-lg">
                <Star className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Premium Hizmet</h3>
                <p className="text-gray-600">Lüks araç filomuz ve özel hizmetlerimizle fark yaratıyoruz.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-8 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 leading-relaxed mb-6">
              2003 yılından bu yana, Kırçami Taşımacılık olarak müşterilerimize premium ulaşım hizmetleri sunmaktayız. Yılların deneyimi ve profesyonel yaklaşımımızla, sektörde güvenilir bir marka haline geldik.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lüks araç filomuz ve deneyimli sürücülerimizle, her yolculuğunuzu konforlu ve güvenli hale getiriyoruz. VIP transfer hizmetlerimiz, iş seyahatleriniz ve özel günleriniz için ideal çözümler sunuyor.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Müşteri memnuniyetini her şeyin üstünde tutan anlayışımızla, sizlere 7/24 kesintisiz hizmet veriyoruz. Modern teknolojilerle donatılmış araçlarımız ve profesyonel ekibimizle, beklentilerinizin ötesinde bir deneyim yaşatıyoruz.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}