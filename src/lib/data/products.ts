import {
  pLiberica825, pLiberica825_2,
  pArabicaTrawas, pArabicaTrawas_2,
  pExcelsaAnaerobic,
  pMisisipi, pMisisipi_2, pMisisipi_3, pMisisipi_4,
  pLibericaMossto, pLibericaMossto_2,
  pArabicaSelosa, pArabicaSelosa_2, pArabicaSelosa_3,
  pExcelsaLot13, pExcelsaLot13b, pExcelsaLot13c,
  pLibericaAnaerobic, pLibericaAnaerobic_2,
  pFineRobusta, pFineRobusta_2,
  pHouseBlend5050, pHouseBlend5050_2, pHouseBlend5050_3, pHouseBlend5050_4, pHouseBlend5050_5, pHouseBlend5050_6,
  pHouseBlendArabica, pHouseBlendArabica_2, pHouseBlendArabica_3, pHouseBlendArabica_4, pHouseBlendArabica_5,
  pPandemix,
  pExcelsaAnjasmoro, pExcelsaAnjasmoro_2,
  pRobustaNatural,
  pUnderdog,
  rMuhamad, rEa, rNando, rDwi, rBelakangrumah, rMk,
  rAdiFineRobusta, rAdi, rYogi, rMarsel, rYayak,
  rJv, rIi, rBrian, rGa, rZeric, rDom, rAan,
} from '$lib/assets/images';

export interface Review {
  author: string;
  text: string;
  image?: string;
}

export type Species = 'Arabica' | 'Liberica' | 'Excelsa' | 'Robusta' | 'Blend';
export type RoastLevel = 'light' | 'medium' | 'medium-dark' | 'dark' | 'omni';
export type Category = 'single-origin' | 'blend' | 'espresso';

export interface Product {
  id: string;
  name: string;
  shortName: string;
  price: number | null;
  weight: string;
  species: Species;
  region: string;
  process: string;
  variety: string;
  altitude: string;
  notes: string[];
  processor: string;
  image: string;
  images: string[];
  description?: string;
  tokopediaLink: string;
  category: Category;
  roastLevel: RoastLevel;
  reviews: Review[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'liberica-natural-825',
    name: 'Liberica Natural 825 Wonosalam Jawa Timur – 100 gram',
    shortName: 'Liberica Natural 825',
    price: 65000,
    weight: '100g',
    species: 'Liberica',
    region: 'Wonosalam, East Java',
    process: 'Natural Klasik',
    variety: 'Liberica',
    altitude: '500–700 masl',
    notes: ['Passion Fruit', 'Muscat Grape', 'Sugar Cane', 'Molasses'],
    processor: 'Wandhe Family Estate',
    image: pLiberica825,
    images: [pLiberica825, pLiberica825_2],
    description: 'Liberica Natural 825 adalah ekspresi murni dari kebun Wandhe Family Estate di ketinggian 500–700 mdpl Wonosalam. Diproses melalui Natural Klasik yang mempertahankan karakter asli biji — menghasilkan passion fruit yang segar, muscat grape yang lembut, dan sugar cane yang memberikan kemanisan alami yang khas Liberica Wonosalam. Roasted in East Java oleh Sumber Wandhe Coffee Lab.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/liberica-natural-825-wonosalam-jawa-timur-1734461435959674218?extParam=src%3Dshop%26whid%3D8537365',
    category: 'single-origin',
    roastLevel: 'medium',
    reviews: []
  },
  {
    id: 'arabica-trawas-pxp',
    name: 'Arabica Trawas Reco Lanang PxP Project East Java – 100 gram',
    shortName: 'Arabica Trawas PxP',
    price: 65000,
    weight: '100g',
    species: 'Arabica',
    region: 'Trawas, East Java',
    process: 'Natural Klasik',
    variety: 'Lini-S, Catimor',
    altitude: '1200 masl',
    notes: ['Strawberry', 'Peach', 'Orange', 'Caramel'],
    processor: 'PxP Project',
    image: pArabicaTrawas,
    images: [pArabicaTrawas, pArabicaTrawas_2],
    description: 'Arabica istimewa dari Trawas, Jawa Timur, hasil kolaborasi dengan PxP Project. Varietas Lini-S dan Catimor yang tumbuh di ketinggian 1200 mdpl diproses melalui Natural Klasik, menghasilkan profil rasa yang cerah dan menyegarkan — strawberry yang juicy, peach yang lembut, sentuhan orange, dan karamel yang menutup dengan manis. Roasted in East Java oleh Sumber Wandhe Coffee Lab.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/arabica-trawas-reco-lanang-pxp-project-east-java-1734461399000319338?extParam=src%3Dshop%26whid%3D8537365',
    category: 'single-origin',
    roastLevel: 'light',
    reviews: []
  },
  {
    id: 'parallel-excelsa-arabica',
    name: 'Parallel Excelsa × Arabica Omni Roast Wonosalam Wanoja – 100 gram',
    shortName: 'Parallel Excelsa × Arabica',
    price: 70000,
    weight: '100g',
    species: 'Blend',
    region: 'Wonosalam & Ibun',
    process: 'Anaerobic & Natural Extended',
    variety: 'Coffea Excelsa & Coffea Arabica',
    altitude: '600–1500 masl',
    notes: ['Dark Cherry', 'Rum', 'Red Apple', 'Chocolate'],
    processor: 'Wandhe Family Estate & Wanoja',
    image: pExcelsaLot13b,
    images: [pExcelsaLot13b],
    description: 'Eksperimen Omni Roast yang menggabungkan Excelsa dari Wonosalam (600+ mdpl) dan Arabica dari Ibun (1500 mdpl) dalam komposisi 50:50. Diproses melalui Anaerobic dan Natural Extended oleh Wandhe Family Estate dan Wanoja, menghasilkan profil gelap yang kompleks — dark cherry, rum, red apple, dan chocolate yang berlapis. Cocok sebagai base filter maupun espresso.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/parallel-excelsa-x-arabica-omni-roast-wonosalam-wanoja-1734432896214533482?extParam=src%3Dshop%26whid%3D8537365',
    category: 'blend',
    roastLevel: 'omni',
    reviews: []
  },
  {
    id: 'misisipi-espresso',
    name: 'Misisipi – Espresso Excelsa Arabica Robusta Biji – 200g',
    shortName: 'Misisipi Espresso',
    price: 85000,
    weight: '200g',
    species: 'Blend',
    region: 'East Java',
    process: 'Natural Blend',
    variety: 'Excelsa 65% · Arabica 24% · Robusta 11%',
    altitude: '500–1200 masl',
    notes: ['Banana', 'Red Apple', 'Vanilla'],
    processor: 'Sumber Wandhe Coffee Lab',
    image: pMisisipi,
    images: [pMisisipi, pMisisipi_2, pMisisipi_3, pMisisipi_4],
    description: 'House Blend Misisipi adalah campuran biji kopi yang terdiri dari 65% Excelsa, 24% Arabika, dan 11% Robusta. Rasio ini memberikan keseimbangan sempurna antara kekentalan dan keasaman — karakter Excelsa yang dominan diperhalus oleh keasaman Arabika dan dikuatkan oleh body Robusta. Notes banana, red apple, dan vanilla menjadikannya espresso yang kaya, kompleks, dan memanjakan dalam setiap tegukan.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/misisipi-espresso-excelsa-arabica-robusta-biji-1734324385127368042?extParam=whid%3D8537365%26src%3Dshop',
    category: 'espresso',
    roastLevel: 'medium-dark',
    reviews: []
  },
  {
    id: 'excelsa-anaerobic',
    name: 'Excelsa Anaerobic Natural Wonosalam Jawa Timur – 100 gram',
    shortName: 'Excelsa Anaerobic',
    price: 80000,
    weight: '100g',
    species: 'Excelsa',
    region: 'Wonosalam, East Java',
    process: 'Natural Anaerobic',
    variety: 'Mix Var',
    altitude: '500–700 masl',
    notes: [],
    processor: 'Wandhe Family Estate',
    image: pExcelsaAnaerobic,
    images: [pExcelsaAnaerobic],
    description: 'Excelsa Anaerobic Natural dari kebun Wandhe Family Estate di Wonosalam. Proses Natural Anaerobic yang terkontrol mengekstrak karakter terbaik dari biji Excelsa varietas campuran yang tumbuh di ketinggian 500–700 mdpl. Kopi yang direkomendasikan bagi Anda yang menyukai profil rasa yang berani dan unik. Roasted in East Java oleh Sumber Wandhe Coffee Lab.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/excelsa-anaerobic-natural-wonosalam-jawa-timur-1733819291834942826?extParam=src%3Dshop%26whid%3D8537365',
    category: 'single-origin',
    roastLevel: 'medium',
    reviews: [
      { author: 'Muhamad', text: 'mantap kopinya, rekomen buat yg suka ngopi', image: rMuhamad }
    ]
  },
  {
    id: 'liberica-mossto',
    name: 'Liberica Mossto Natural Wonosalam Jawa Timur – 100 gram',
    shortName: 'Liberica Mossto',
    price: 86000,
    weight: '100g',
    species: 'Liberica',
    region: 'Wonosalam, East Java',
    process: 'Natural Mossto',
    variety: 'Liberica',
    altitude: '500–700 masl',
    notes: ['Raisin', 'Prune', 'Watermelon', 'Violet', 'Bubble Gum', 'Red Apple', 'Magnolia', 'Cola'],
    processor: 'Wandhe Family Estate',
    image: pLibericaMossto,
    images: [pLibericaMossto, pLibericaMossto_2],
    description: 'Liberica Mossto adalah hasil eksplorasi proses Natural Mossto yang dikuasai dengan penuh presisi oleh Wandhe Family Estate. Biji Liberica dari ketinggian 500–700 mdpl Wonosalam mengalami fermentasi Mossto yang menghasilkan profil rasa luar biasa kompleks — raisin, prune, watermelon, violet, bubble gum, red apple, magnolia, hingga cola dalam satu cangkir. Pengalaman rasa yang benar-benar tak terlupakan.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/liberica-mossto-natural-wonosalam-jawa-timur-1733467470858585450?extParam=whid%3D8537365%26src%3Dshop',
    category: 'single-origin',
    roastLevel: 'medium-dark',
    featured: true,
    reviews: []
  },
  {
    id: 'arabica-selosa',
    name: 'Arabica Selosa Triple Pick Banjarnegara West Java – 100 gram',
    shortName: 'Arabica Selosa Triple Pick',
    price: 80000,
    weight: '100g',
    species: 'Arabica',
    region: 'Prigen, East Java',
    process: 'Oxyana Natural 125h',
    variety: 'Catimor, S-795',
    altitude: '1200 masl',
    notes: ['Earl Grey', 'Mandarin Orange', 'Bergamot', 'Rose'],
    processor: 'Beanfreak Picker',
    image: pArabicaSelosa,
    images: [pArabicaSelosa, pArabicaSelosa_2, pArabicaSelosa_3],
    description: 'Arabica Triple Pick dari Prigen, Jawa Timur, hasil seleksi ketat oleh Beanfreak Picker. Varietas Catimor dan S-795 dari ketinggian 1200 mdpl diproses melalui Oxyana Natural selama 125 jam — menghasilkan profil yang anggun dan elegan. Earl grey, mandarin orange, bergamot, dan rose berpadu dalam harmoni yang sophisticated. Roasted in East Java oleh Sumber Wandhe Coffee Lab.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/arabica-selosa-triple-pick-banjarnegara-west-java-1733006812956820842?extParam=src%3Dshop%26whid%3D8537365',
    category: 'single-origin',
    roastLevel: 'light',
    featured: true,
    reviews: [
      { author: 'Bagus', text: 'enakkk' },
      { author: 'Kapi', text: 'respon cepat, kemasan rapi' },
      { author: 'Y***h', text: 'Pesenya Liberica mossto pas dateng liberica anaerob, langsung chat admin trus dikirim pengganti terimakasih, (respon cepat)' },
      { author: 'd***l', text: 'pembelian yg kedua...kopi yg enak...dg taste yg unik..mantabs..' },
      { author: 'E***a', text: 'Packing aman, brg sesuai, top', image: rEa }
    ]
  },
  {
    id: 'excelsa-mossto-lot13',
    name: 'Excelsa Mossto Lot 13 Wonosalam Jawa Timur – 100g',
    shortName: 'Excelsa Mossto Lot 13',
    price: 80000,
    weight: '100g',
    species: 'Excelsa',
    region: 'Wonosalam, East Java',
    process: 'Natural Mossto',
    variety: 'Excelsa, Dewevrei',
    altitude: '500–700 masl',
    notes: ['Sarsaparilla', 'Strawberry Juice', 'Mango Candy', 'Crimson Grapes', 'Stevia'],
    processor: 'Wandhe Family Estate',
    image: pExcelsaLot13,
    images: [pExcelsaLot13, pExcelsaLot13b, pExcelsaLot13c],
    description: 'Excelsa Mossto Lot 13 adalah kopi yang membuat orang tersenyum sendiri setelah tegukan pertama. Biji Excelsa varietas Dewevrei dari Wonosalam diproses melalui Natural Mossto yang dikuasai dengan presisi total oleh Wandhe Family Estate. Hasilnya adalah profil rasa yang belum pernah ada sebelumnya — sarsaparilla, strawberry juice, mango candy, crimson grapes, dan stevia alami yang terasa nyata dan tak terduga. Kopi ikonik Sumber Wandhe yang dibuktikan oleh ratusan pecinta kopi.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/excelsa-mossto-lot-13-wonosalam-jawa-timur-1733419136673088874?extParam=src%3Dshop%26whid%3D8537365',
    category: 'single-origin',
    roastLevel: 'medium',
    featured: true,
    reviews: [
      { author: 'Fadlila', text: 'first time nyobain beans excelsa wonosalam, enak banget! aroma bubble gum nya kuat + manis stevia, gokil.' },
      { author: 'Dudi', text: 'Wah sumpah menurut gw ini kopi unik dan enak banget asliii... kompleks bgt rasanya ada rasa2 yg selama ini gw blom pernah temuin di kopi2 lain, asik banget pokoknya 👌' },
      { author: 'Pengabdi', text: 'packaging nya bagus, seller fast respon kopinya enak 😘👍🏼✨' },
      { author: 'E***a', text: 'Packing aman, brg sesuai, top. Seduh pakai hario pegasus, yg nonjol manisnya, mantap!' },
      { author: 'Mochammad', text: 'beli kopi ini setelah lihat konten di youtube dan ternyata memang rasanya sesuai, wangi dan manis' },
      { author: 'Andika', text: 'Masya Allah, ini bener-bener enak bgt kopinya, gag nyesel jadi korban channel YT @PecahTelor' },
      { author: 'Bagus', text: 'terima kasih mas, enak-enak' },
      { author: 'Luqman', text: 'So far so great tastenya sama kaya yg awal beli dan enaaak' },
      { author: 'G***p', text: 'Packing rapi, barang aman, dan kopi super tasty! Cepet banget dari tanggal order langsung kirim' },
      { author: 'Dwi', text: 'Rasa mantep. tinggal ikut resep seduh di kemasannya dijamin jos gandos', image: rDwi },
      { author: 'Eflin', text: 'Super enak, rasanya selalu konsisten. Kerasa banget bahannya berkualitas.' },
      { author: 'Deni', text: 'Baru diterima dan belum dicoba. Semoga cocok.' },
      { author: 'Surya', text: 'rasanya enak dan unik' },
      { author: 'Nur', text: 'Enak ini mah....' },
      { author: 'Roland', text: 'karakter nya unik.. sarsaparilla, strawberry dan stevia notesnya jelas bgt. salah satu beans yg rekomen' },
      { author: 'Nando', text: 'Aroma kopinya harum, pahit asamnya nyaman di lambung. Insha Allah bakal repeat order 😊', image: rNando },
      { author: 'BelakangRumah', text: 'Salah satu pilihan yang asik di @belakangrumah.krw', image: rBelakangrumah }
    ]
  },
  {
    id: 'liberica-anaerobic',
    name: 'Liberica Anaerobic Natural Wonosalam Jawa Timur – 100 gram',
    shortName: 'Liberica Anaerobic',
    price: 86000,
    weight: '100g',
    species: 'Liberica',
    region: 'Wonosalam, East Java',
    process: 'Natural Anaerobic',
    variety: 'Liberica',
    altitude: '500–700 masl',
    notes: ['Red Apple', 'Guava', 'Stevia'],
    processor: 'Wandhe Family Estate',
    image: pLibericaAnaerobic,
    images: [pLibericaAnaerobic, pLibericaAnaerobic_2],
    description: 'Liberica Anaerobic Natural dari kebun Wandhe Family Estate di Wonosalam. Proses Natural Anaerobic yang lambat dan terkontrol mengekstrak Liberica dari dalam — menghasilkan Red Apple, Guava, dan kemanisan Stevia alami yang bersih dan jelas. Aroma nangka khas Liberica hadir sebagai fondasi yang kuat, sementara proses anaerobic menambahkan dimensi rasa yang lebih dalam dan memikat.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/liberica-anaerobic-natural-wonosalam-jawa-timur-1732800183855318378?extParam=src%3Dshop%26whid%3D8537365',
    category: 'single-origin',
    roastLevel: 'medium',
    reviews: [
      { author: 'd***l', text: 'pembelian yg kedua...kopi yg enak...dg taste yg unik..mantabs…' },
      { author: 'd***l', text: 'baru pertamakali nyoba kopi jenis liberica...baru datang langsung nyeduh..enak...aroma nangka..cukup balance...' },
      { author: 'D***a', text: 'Joss' },
      { author: 'H***a', text: 'Suka banget sama kopi liberica karena rasanya unik.' },
      { author: 'Yusuf', text: 'Mantab Kak rasanya.. Top bintang 5 untuk kopinya..' },
      { author: 'M***k', text: 'Thanks yaa', image: rMk },
      { author: 'Airini', text: 'proses cepat, harga lumayan, barang sesuai' },
      { author: 'Firdaus', text: 'Enak! Notes nya unik.' }
    ]
  },
  {
    id: 'fine-robusta-mossto',
    name: 'Fine Robusta Mossto Malic Wonosalam Jawa Timur – 100 gram',
    shortName: 'Fine Robusta Mossto',
    price: 55000,
    weight: '100g',
    species: 'Robusta',
    region: 'Wonosalam, East Java',
    process: 'Natural Mossto Malic',
    variety: 'Congensis Uganda',
    altitude: '500–700 masl',
    notes: ['Salted Caramel', 'Chocolate', 'Almond', 'Marzipan', 'Rose'],
    processor: 'Wandhe Family Estate',
    image: pFineRobusta,
    images: [pFineRobusta, pFineRobusta_2],
    description: 'Fine Robusta Mossto Malic adalah manifestasi terbaik dari spesies Canephora varietas Congensis Uganda yang tumbuh di Wonosalam. Proses Natural Mossto Malic yang unik menghasilkan profil rasa yang jauh dari kesan Robusta biasa — salted caramel yang lembut, chocolate yang kaya, almond yang creamy, marzipan yang manis, dan rose yang elegant. Robusta yang mengubah perspektif.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/fine-robusta-mossto-malic-wonosalam-jawa-timur-1732718852864902506?extParam=whid%3D8537365%26src%3Dshop',
    category: 'single-origin',
    roastLevel: 'medium-dark',
    reviews: [
      { author: 'Adi', text: 'Packingnya aman, barang sesuai dan semoga cocok kopinya. Tq seller', image: rAdiFineRobusta }
    ]
  },
  {
    id: 'house-blend-5050',
    name: 'House Blend 50:50 – Arabica Robusta 1 kg – 200g',
    shortName: 'House Blend 50:50',
    price: 60000,
    weight: '200g',
    species: 'Blend',
    region: 'East Java',
    process: 'Natural Blend',
    variety: 'Arabica 50% & Robusta 50%',
    altitude: '–',
    notes: ['Balanced', 'Complex', 'Rich Aroma'],
    processor: 'Sumber Wandhe Coffee Lab',
    image: pHouseBlend5050,
    images: [pHouseBlend5050, pHouseBlend5050_2, pHouseBlend5050_3, pHouseBlend5050_4, pHouseBlend5050_5, pHouseBlend5050_6],
    description: 'House Blend 50:50 adalah campuran biji kopi Arabika dan Robusta dalam perbandingan yang seimbang. Kandungan Arabika 50% menghadirkan rasa yang lebih ringan dan fruity, sementara Robusta 50% memberikan body yang kuat dan aroma yang tajam. Kombinasi keduanya menghasilkan kopi dengan rasa yang kompleks, kaya, dan cocok untuk dinikmati kapan saja — baik dengan susu, gula, maupun hitam murni.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/house-blend-full-arabica-east-java-1-kg-1731190139826964422?extParam=src%3Dshop%26whid%3D8537365',
    category: 'espresso',
    roastLevel: 'medium-dark',
    reviews: [
      { author: 'Adi', text: 'wangi. belum dicoba espresso nya. semoga enak. sebelumnya beli espresso beda jenis. Enak', image: rAdi },
      { author: 'A***v', text: 'Tidak pernah salah beli ke sumber wandhe' },
      { author: 'G***h', text: 'harum' },
      { author: 'Muhammad', text: 'Mantap✨' },
      { author: 'V***v', text: 'Kualitas produk: mantap' }
    ]
  },
  {
    id: 'house-blend-arabica',
    name: 'House Blend Arabica 1 kg – Blend Commodities – 200g',
    shortName: 'House Blend Arabica',
    price: 60000,
    weight: '200g',
    species: 'Arabica',
    region: 'East Java',
    process: 'Natural Blend',
    variety: 'Full Arabica',
    altitude: '–',
    notes: ['Smooth', 'Fruity', 'Strong Aroma'],
    processor: 'Sumber Wandhe Coffee Lab',
    image: pHouseBlendArabica,
    images: [pHouseBlendArabica, pHouseBlendArabica_2, pHouseBlendArabica_3, pHouseBlendArabica_4, pHouseBlendArabica_5],
    description: 'House Blend Full Arabika dari Sumber Wandhe Coffee Lab menghadirkan rasa yang lebih halus dan aroma yang kuat. Terbuat dari biji Arabika berkualitas tinggi yang diproses dengan cermat, kopi ini memiliki konsistensi rasa yang dapat diandalkan — smooth, fruity, dan penuh aroma. Sempurna sebagai base espresso, cappuccino, latte, maupun filter coffee.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/house-blend-50-50-arabica-robusta-east-java-1-kg-1731190062447101894?extParam=src%3Dshop%26whid%3D8537365',
    category: 'espresso',
    roastLevel: 'medium',
    reviews: [
      { author: 'RENOVA', text: 'Blendnya enak, tapi sayang kemasan belum one way valve' },
      { author: 'Fahyudi', text: 'Asikk taste espresso nya. Recommended seller' },
      { author: 'M***m', text: 'good' }
    ]
  },
  {
    id: 'pandemix-robusta',
    name: 'Kopi Pandemix Full Robusta 1 Kg – Espresso – 200gram',
    shortName: 'Pandemix Full Robusta',
    price: 50000,
    weight: '200g',
    species: 'Robusta',
    region: 'East Java',
    process: 'Natural',
    variety: 'Full Robusta',
    altitude: '–',
    notes: ['Bold', 'Strong', 'Dark'],
    processor: 'Sumber Wandhe Coffee Lab',
    image: pPandemix,
    images: [pPandemix],
    description: 'Pandemix Full Robusta adalah espresso blend berbasis 100% Robusta berkualitas tinggi dari Jawa Timur. Rasa yang kuat, kaya, dan berani — aroma yang tajam dan khas Robusta yang memberi sensasi espresso yang sesungguhnya. Pilihan tepat bagi Anda yang mencari kopi dengan body tebal, crema yang kuat, dan karakter yang tak tergoyahkan.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/pandemix-espresso-full-robusta-1kg-200gram-422b7?extParam=src%3Dshop%26whid%3D8537365',
    category: 'espresso',
    roastLevel: 'dark',
    reviews: [
      { author: 'Sulung', text: 'pengiriman sesuai, barang sesuai, medium to dark.' },
      { author: 'S***a', text: 'best local brand' }
    ]
  },
  {
    id: 'excelsa-anjasmoro',
    name: 'Excelsa Wonosalam Anjasmoro Natural Coffee – Bubuk Halus, 1 kg',
    shortName: 'Excelsa Anjasmoro',
    price: 186000,
    weight: '200g',
    species: 'Excelsa',
    region: 'Wonosalam, East Java',
    process: 'Natural',
    variety: 'Anjasmoro',
    altitude: '800 masl',
    notes: ['Sweet', 'Nutty', 'Fruity', 'Jackfruit'],
    processor: 'Sumber Wandhe Coffee Lab',
    image: pExcelsaAnjasmoro,
    images: [pExcelsaAnjasmoro, pExcelsaAnjasmoro_2],
    description: 'Excelsa Wonosalam Anjasmoro Natural adalah kopi yang dipercaya oleh lebih dari 500 pecinta kopi. Tumbuh di ketinggian 800 mdpl Wonosalam, varietas Anjasmoro diproses secara Natural untuk menonjolkan kemanisan alami yang gila-gilaan — manis tanpa gula, body yang tebal dan menyenangkan, dengan aroma nangka khas Excelsa yang membuat setiap tegukan menjadi momen yang ingin diulang. Cocok untuk French Press, Kalita Wave, maupun Japanese Cold Brew.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/excelsa-wonosalam-anjasmoro-natural-coffee-1731596238790034794?extParam=src%3Dshop%26whid%3D8537365',
    category: 'single-origin',
    roastLevel: 'medium',
    reviews: [
      { author: 'Yogi', text: 'Seller Ramah, Fast Respon, Packaging okee, barangnyaa bagusss Original. Recomended Seller', image: rYogi },
      { author: 'Yayak', text: 'Biji kopi sudah diterima dengan baik, paket dikemas rapi. Saat masih panas terasa ada sensasi fruity, pada suhu turun rasa pahit muncul. Untuk yang suka ngopi dengan body tebal, kopi ini pas banget.', image: rYayak },
      { author: 'Marsel', text: 'ok bgt classic naturalnya.. manis.. body cukup tebal, sedeng lah..', image: rMarsel },
      { author: 'a***s', text: 'enak ini kopinya, saya seduh pake French Press. Bukan type kopi dengan kopi tebal, tapi rasanya lebih nutty fruitty. Ringan dan easy to drink' },
      { author: 'J***v', text: 'Product quality: MANTAPPPPP Packing sangat aman', image: rJv },
      { author: 'Habibul', text: 'enak banget, experience rasa sesuai deskripsi juga. cocok buat orang yang suka minum kopi manis tanpa gula, karena manisnya emang gila-gilaan.' },
      { author: 'I***I', text: 'Rasanya mantap, ada rasa dan aroma nangka, ratio 1 : 10an', image: rIi },
      { author: 'Fahmisuhardimanalatas', text: 'belum pernah minum kopi tanpa gula tapi pas nyoba enak bgt seger mantab jos' },
      { author: 'Brian', text: 'Mantap kopinya 👌 tapi kenapa roasting datenya tidak dicantumkan. Terimakasih seller yg baik hati semoga diterima masukannya 🙏', image: rBrian },
      { author: 'g***a', text: 'Beansnya enak. Tcakep nih. Suwun sumber wandhe rispect!', image: rGa },
      { author: 'Mochamad', text: 'barang sesuai deskripsi, pengiriman sesuai jadwal' },
      { author: 'Rony', text: 'packing aman dan sangat baik, pengiriman juga cepat sampai tujuan.' },
      { author: 'Dom', text: 'kopiii nya lumayan tp harummmm 🤤bgt packing juga lucu rame bgt desainnya 👍', image: rDom },
      { author: 'BelakangRumah', text: 'Salah satu pilihan yang asik di @belakangrumah.krw' },
      { author: 'Zeric', text: 'kopi enak, harga terjangkau, dapet sample kopi juga. pengiriman cepat dan aman. Terbaik.', image: rZeric }
    ]
  },
  {
    id: 'robusta-natural',
    name: 'Kopi Robusta Natural 200g Biji Kopi Organic – Biji',
    shortName: 'Robusta Natural Organic',
    price: 50000,
    weight: '200g',
    species: 'Robusta',
    region: 'Wonosalam, East Java',
    process: 'Natural',
    variety: 'Tugusari, BP 42',
    altitude: '800 masl',
    notes: ['Chocolate', 'Nutty', 'Caramel', 'Lemon Candy'],
    processor: 'Wandhe Family Estate',
    image: pRobustaNatural,
    images: [pRobustaNatural],
    description: 'Robusta Wonosalam Anjasmoro Natural adalah kopi Robusta organik berkualitas tinggi dari Wonosalam, Jombang, Jawa Timur. Ditanam dengan bibit Tugusari dan BP 42 di ketinggian 800 mdpl, diproses secara alami untuk mempertahankan rasa dan aroma terbaik biji kopi. Profil rasa yang kaya dan kompleks — chocolate, nutty, caramel, dan lemon candy membentuk cangkir yang memuaskan dan menyenangkan.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/robusta-wonosalam-anjasmoro-natural-200-gram-biji?extParam=src%3Dshop%26whid%3D8537365',
    category: 'single-origin',
    roastLevel: 'medium',
    reviews: [
      { author: 'Aan', text: 'terima kasih mas karim dan tim nya sudah mendarat dan diterima dengan selamat, sukses dan jaya terus ✌️', image: rAan },
      { author: 'Wahed', text: 'kopinya enak, pelayanannya bagus' },
      { author: 'Aan', text: 'terima kasih lagi mas karim dan tim, diterima dengan baik' }
    ]
  },
  {
    id: 'underdog-blend',
    name: 'Espresso House Blend Underdog Arabica × Excelsa – 200g',
    shortName: 'Underdog Blend',
    price: 65000,
    weight: '200g',
    species: 'Blend',
    region: 'East Java',
    process: 'Natural Blend',
    variety: 'Arabica × Excelsa',
    altitude: '–',
    notes: ['Exotic Fruit', 'Sweet', 'Bold', 'Unique'],
    processor: 'Sumber Wandhe Coffee Lab',
    image: pUnderdog,
    images: [pUnderdog],
    description: 'Houseblend Underdog mempertemukan Arabica pilihan dengan Excelsa yang langka dalam sebuah komposisi espresso yang penuh kejutan. Kehalusan dan keasaman khas Arabica berpadu dengan karakter eksotis Excelsa yang menawarkan rasa buah-buahan tropis dan manis yang tak terduga. Diciptakan untuk para penikmat kopi yang mencari pengalaman, bukan sekadar minuman. Satu tegukan Underdog, dan kamu akan mengerti mengapa ia disebut sang underdog yang menang.',
    tokopediaLink: 'https://www.tokopedia.com/sumberwandhe/espresso-house-blend-underdog-arabica-x-excelsa-200-g-414b3?extParam=whid%3D8537365%26src%3Dshop',
    category: 'espresso',
    roastLevel: 'medium-dark',
    reviews: [
      { author: 'Sulung', text: 'pengiriman sesuai, barang sesuai, medium to dark.' },
      { author: 'S***a', text: 'best local brand' }
    ]
  }
];

export const featuredProducts = products.filter(p => p.featured);
