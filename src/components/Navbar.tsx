import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import BookingModal from './BookingModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleCallNow = () => {
    scrollToSection('contact');
    setShowBookingModal(false);
  };

  const handleReservation = () => {
    setShowBookingModal(false);
    scrollToSection('fleet');
  };

  const navItems = [
    { label: 'Hizmetlerimiz', id: 'services' },
    { label: 'Araçlarımız', id: 'fleet' },
    { label: 'Referanslar', id: 'references' },
    { label: 'Galeri', id: 'gallery' },
    { label: 'Hakkımızda', id: 'about' },
    { label: 'İletişim', id: 'contact' }
  ];

  return (
    <nav className="fixed w-full bg-black/90 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex-shrink-0 font-['Poppins'] text-3xl tracking-wider hover:text-gold transition-colors"
          >
            KIRCAMI TAŞIMACILIK
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                className="relative group overflow-hidden"
              >
                <span className="inline-block hover:text-gold transition-colors duration-300">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold/50 transform origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 delay-75"></span>
              </button>
            ))}
            <button 
              onClick={() => setShowBookingModal(true)}
              className="w-48 h-12 flex items-center justify-center gap-2 bg-gold text-black rounded-md hover:bg-gold/90 transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Phone size={18} />
              <span>Şimdi Kirala</span>
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 hover:bg-gold/20 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setShowBookingModal(true)}
              className="flex items-center gap-2 px-3 py-2 text-gold w-full hover:bg-gold/10 transition-colors duration-300"
            >
              <Phone size={18} />
              <span>Şimdi Kirala</span>
            </button>
          </div>
        </div>
      )}

      {/* Quick Action Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-serif mb-6 text-black">Nasıl Yardımcı Olabiliriz?</h3>
            <div className="space-y-4">
              <button
                onClick={handleCallNow}
                className="w-full h-14 bg-gold text-black rounded-md hover:bg-gold/90 transition-all duration-300 font-semibold"
              >
                Beni Arayın
              </button>
              <button
                onClick={handleReservation}
                className="w-full h-14 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 font-semibold"
              >
                Hemen Rezervasyon Yap
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}