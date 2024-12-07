import { motion } from 'framer-motion';
import { format, addHours } from 'date-fns';
import { tr } from 'date-fns/locale';
import { X } from 'lucide-react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { sendReservationNotifications } from '../utils/notifications';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicleName: string;
}

export default function BookingModal({ isOpen, onClose, vehicleName }: BookingModalProps) {
  const [rentalType, setRentalType] = useState<'daily' | 'hourly'>('daily');
  const [duration, setDuration] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hourlyRate = 250;
  const dailyRate = 3000;

  const calculateTotal = () => {
    return rentalType === 'daily' 
      ? dailyRate * duration 
      : hourlyRate * duration;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    const minDate = addHours(new Date(), 2); // Minimum 2 saat sonrası için rezervasyon

    if (selectedDate < minDate) {
      toast.error('Lütfen en az 2 saat sonrası için rezervasyon yapın');
      return;
    }

    setStartDate(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate || !customerName || !customerPhone || !customerEmail) {
      toast.error('Lütfen tüm alanları doldurun');
      return;
    }

    setIsSubmitting(true);
    const success = await sendReservationNotifications({
      customerName,
      customerPhone,
      customerEmail,
      vehicleName,
      startDate: new Date(startDate),
      duration,
      rentalType,
      totalPrice: calculateTotal()
    });

    if (success) {
      toast.success('Rezervasyonunuz başarıyla alındı!');
      setTimeout(() => {
        onClose();
      }, 2000);
    } else {
      toast.error('Rezervasyon alınırken bir hata oluştu');
    }
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  const minDateTime = format(addHours(new Date(), 2), "yyyy-MM-dd'T'HH:mm");

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Toaster position="top-center" />
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 max-w-md w-full relative"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-serif mb-6">{vehicleName} Rezervasyon</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ad Soyad
            </label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-gold focus:border-gold"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefon
            </label>
            <input
              type="tel"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-gold focus:border-gold"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-posta
            </label>
            <input
              type="email"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-gold focus:border-gold"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kiralama Tipi
            </label>
            <select
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-gold focus:border-gold"
              value={rentalType}
              onChange={(e) => setRentalType(e.target.value as 'daily' | 'hourly')}
            >
              <option value="daily">Günlük</option>
              <option value="hourly">Saatlik</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Başlangıç Tarihi ve Saati
            </label>
            <input
              type="datetime-local"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-gold focus:border-gold"
              value={startDate}
              onChange={handleDateChange}
              min={minDateTime}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {rentalType === 'daily' ? 'Gün Sayısı' : 'Saat Sayısı'}
            </label>
            <input
              type="number"
              min="1"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-gold focus:border-gold"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              required
            />
          </div>

          <div className="pt-4 border-t">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Birim Fiyat:</span>
              <span>{rentalType === 'daily' ? '3,000' : '250'} TL</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Süre:</span>
              <span>{duration} {rentalType === 'daily' ? 'Gün' : 'Saat'}</span>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <span>Toplam:</span>
              <span className="bg-gold text-black px-4 py-2 rounded-md">
                {calculateTotal().toLocaleString('tr-TR')} TL
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors mt-4 disabled:bg-gray-400"
          >
            {isSubmitting ? 'İşleniyor...' : 'Rezervasyon Yap'}
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}