import { pExcelsaAnjasmoro, pExcelsaLot13, pUnderdog } from '$lib/assets/images';

export interface AuctionProduct {
  id: string;
  name: string;
  subtitle: string;
  lot: string;
  startingPrice: number;
  species: string;
  region: string;
  process: string;
  altitude: string;
  notes: string[];
  story: string;
  image: string;
  tokopediaLink: string;
  available: boolean;
  crop: string;
}

export const auctionProducts: AuctionProduct[] = [
  {
    id: 'excelsa-anjasmoro-natural',
    name: 'Excelsa Anjasmoro Natural',
    subtitle: 'Excelsa Natural · Terlaris 500+ Terjual',
    lot: 'Tersedia · Best Seller',
    startingPrice: 50000,
    species: 'Excelsa',
    region: 'Wonosalam, East Java',
    process: 'Natural',
    altitude: '800 masl',
    notes: ['Sweet', 'Fruity', 'Jackfruit', 'Nutty'],
    story: 'Dipercaya oleh lebih dari 500 pecinta kopi — Excelsa Anjasmoro Natural adalah bukti bahwa kopi Wonosalam mampu berbicara sendiri. Manis alami yang menggila tanpa gula, body tebal yang nyaman, dan aroma nangka khas Excelsa yang membuat setiap tegukan tak terlupakan. Seduh dengan French Press, Kalita Wave, atau Japanese Cold Brew — karakter aslinya selalu konsisten dan memanjakan.',
    image: pExcelsaAnjasmoro,
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/excelsa-wonosalam-anjasmoro-natural-coffee-1731596238790034794?extParam=src%3Dshop%26whid%3D8537365',
    available: true,
    crop: '2024'
  },
  {
    id: 'excelsa-mossto-lot13',
    name: 'Excelsa Mossto Lot 13',
    subtitle: 'Excelsa Natural Mossto · Produk Ikonik',
    lot: 'Lot 13 · 100+ Terjual',
    startingPrice: 80000,
    species: 'Excelsa',
    region: 'Wonosalam, East Java',
    process: 'Natural Mossto',
    altitude: '500–700 masl',
    notes: ['Sarsaparilla', 'Strawberry Juice', 'Mango Candy', 'Crimson Grapes', 'Stevia'],
    story: 'Kopi yang membuat orang tersenyum sendiri setelah seruput pertama. Excelsa Mossto Lot 13 lahir dari proses Mossto yang dikuasai dengan penuh presisi oleh Wandhe Family Estate. Profil rasanya kompleks dan unik — sarsaparilla, stroberi, dan stevia alami yang jelas terasa. Ini bukan kopi biasa, ini adalah pengalaman yang selalu ingin diulangi.',
    image: pExcelsaLot13,
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/excelsa-mossto-lot-13-wonosalam-jawa-timur-1733419136673088874?extParam=src%3Dshop%26whid%3D8537365',
    available: true,
    crop: '2024'
  },
  {
    id: 'underdog-espresso-blend',
    name: 'Underdog Espresso Blend',
    subtitle: 'Arabica × Excelsa · House Blend Eksklusif',
    lot: 'House Blend · 100+ Terjual',
    startingPrice: 65000,
    species: 'Arabica × Excelsa',
    region: 'East Java',
    process: 'Natural Blend',
    altitude: '500–1200 masl',
    notes: ['Exotic Fruit', 'Sweet', 'Bold', 'Balanced'],
    story: 'Diciptakan untuk para penikmat kopi yang mencari lebih dari sekadar minuman. Underdog memadukan kehalusan Arabica pilihan dengan karakter liar Excelsa yang langka — menghasilkan espresso dengan aroma yang memikat dan profil rasa berani yang penuh kejutan. Satu tegukan, dan kamu akan mengerti mengapa ia disebut sang underdog yang menang.',
    image: pUnderdog,
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/espresso-house-blend-underdog-arabica-x-excelsa-200-g-414b3?extParam=whid%3D8537365%26src%3Dshop',
    available: true,
    crop: '2025'
  }
];
