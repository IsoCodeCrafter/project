export const META_DEFAULTS = {
  title: "Kırçami Taşımacılık - Antalya'nın Lider VIP Transfer ve Lüks Araç Kiralama Hizmeti",
  description: "Antalya'da VIP transfer, lüks araç kiralama ve özel şoför hizmetleri. Havalimanı transferi, düğün arabası, şehirler arası transfer. 7/24 hizmet.",
  keywords: "antalya vip transfer, lüks araç kiralama antalya, havalimanı transfer, düğün arabası kiralama, şehirler arası vip transfer",
  ogImage: "https://kircamitasimacilik.com.tr/og-image.jpg"
};

export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kırçami Taşımacılık",
  "image": "https://kircamitasimacilik.com.tr/og-image.jpg",
  "description": META_DEFAULTS.description,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kırçami Mahallesi",
    "addressLocality": "Antalya",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.88414,
    "longitude": 30.70563
  },
  "url": "https://kircamitasimacilik.com.tr",
  "telephone": "+905551234567",
  "priceRange": "₺₺₺"
};