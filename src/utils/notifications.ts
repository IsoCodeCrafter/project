import emailjs from '@emailjs/browser';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

interface ReservationDetails {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  vehicleName: string;
  startDate: Date;
  duration: number;
  rentalType: 'daily' | 'hourly';
  totalPrice: number;
}

export const sendReservationNotifications = async (details: ReservationDetails) => {
  const formattedDate = format(details.startDate, 'PPpp', { locale: tr });
  const durationText = details.rentalType === 'daily' ? 'gün' : 'saat';
  
  const emailParams = {
    to_email: 'ismaildogan07@gmail.com',
    customer_name: details.customerName,
    customer_phone: details.customerPhone,
    customer_email: details.customerEmail,
    vehicle_name: details.vehicleName,
    start_date: formattedDate,
    duration: `${details.duration} ${durationText}`,
    total_price: `${details.totalPrice.toLocaleString('tr-TR')} TL`,
    rental_type: details.rentalType === 'daily' ? 'Günlük' : 'Saatlik'
  };

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      emailParams,
      'YOUR_PUBLIC_KEY'
    );
    return true;
  } catch (error) {
    console.error('Notification error:', error);
    return false;
  }
};