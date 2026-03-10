<script lang="ts">
  import { image1, image2, image3, image4, image5, image6, rNando, rDwi, rYogi } from '$lib/assets/images';
  import { featuredProducts } from '$lib/data/products';
  import { auctionProducts } from '$lib/data/auction';

  function formatPrice(price: number | null) {
    if (price === null) return 'Cek Harga';
    return 'Rp ' + price.toLocaleString('id-ID');
  }

  const homepageReviews = [
    {
      text: 'Aroma kopinya harum, pahit asamnya nyaman di lambung, kemasan baru sudah pakai zipper. Insha Allah bakal repeat order 😊',
      author: 'Nando',
      product: 'Excelsa Mossto Lot 13',
      image: rNando
    },
    {
      text: 'Rasa mantep. tinggal ikut resep seduh di kemasannya dijamin jos gandos',
      author: 'Dwi',
      product: 'Excelsa Mossto Lot 13',
      image: rDwi
    },
    {
      text: 'Seller Ramah, Fast Respon, Packaging okee, barangnyaa bagusss Original. Recomended Seller',
      author: 'Yogi',
      product: 'Excelsa Anjasmoro',
      image: rYogi
    }
  ];

  const heroImages = [image1, image2, image3, image4, image5, image6];
  let activeHero = $state(0);

  $effect(() => {
    const interval = setInterval(() => {
      activeHero = (activeHero + 1) % heroImages.length;
    }, 4000);
    return () => clearInterval(interval);
  });

  let activeReview = $state(0);

  function nextReview() {
    activeReview = (activeReview + 1) % homepageReviews.length;
  }

  function prevReview() {
    activeReview = (activeReview - 1 + homepageReviews.length) % homepageReviews.length;
  }

  $effect(() => {
    const interval = setInterval(() => {
      activeReview = (activeReview + 1) % homepageReviews.length;
    }, 3000);
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>Wandhe Coffee Estate – Kopi Premium dari Jawa Timur</title>
</svelte:head>

<!-- hero -->
<section class="hero">
  {#each heroImages as img, i}
    <div class="hero-slide" class:active={i === activeHero} style="background-image: url({img})"></div>
  {/each}
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="hero-label">Wandhe Coffee Estate</p>
    <h1 class="hero-title">Setiap biji kopi<br />memiliki cerita</h1>
    <p class="hero-subtitle">Kami hanya memastikan cerita itu sampai ke cangkirmu dengan sempurna.</p>
    <a href="/products" class="btn-primary hero-cta">Jelajahi Koleksi Kami</a>
  </div>
  <div class="hero-dots">
    {#each heroImages as _, i}
      <button class="hero-dot" class:active={i === activeHero} onclick={() => activeHero = i} aria-label={`Slide ${i + 1}`}></button>
    {/each}
  </div>
</section>

<!-- brand story -->
<section class="brand-story">
  <div class="container brand-story-inner">
    <div class="brand-story-text">
      <p class="section-label">Perjalanan Kami</p>
      <h2 class="brand-story-title">Perjalanan dari<br />Tanah ke Cangkir</h2>
      <p class="brand-story-body">
        Wandhe Coffee Estate lahir dari kecintaan mendalam terhadap kopi berkualitas dan komitmen untuk menghadirkan pengalaman yang autentik. Setiap biji kopi yang kami tanam diperhatikan dengan penuh hormat, dari proses budidaya hingga penyajian.
      </p>
      <p class="brand-story-body">
        Kami percaya bahwa kopi terbaik berasal dari keseimbangan antara tradisi, inovasi, dan dedikasi terhadap kualitas yang tidak pernah berkompromi. Tanah Wonosalam adalah rumah kami — dan setiap cangkir yang Anda nikmati membawa sebagian dari jiwa tempat ini.
      </p>
      <a href="/about" class="btn-outline-dark" style="margin-top: 8px;">Kenali Kami Lebih Dekat</a>
    </div>
    <div class="brand-story-image">
      <img src={image2} alt="Perjalanan kopi dari tanah ke cangkir" />
    </div>
  </div>
</section>

<!-- auction preview -->
<section class="auction-preview">
  <div class="container">
    <div class="auction-header">
      <div>
        <p class="section-label" style="color: var(--brown-200);">Eksklusif</p>
        <h2 class="section-title section-title--white">Koleksi Eksklusif</h2>
        <p class="section-subtitle section-subtitle--white">Temukan kopi langka dengan karakter istimewa</p>
      </div>
    </div>

    <div class="auction-grid">
      {#each auctionProducts as product}
        <a href="/auction" class="auction-card">
          <div class="auction-card-img">
            <img src={product.image} alt={product.name} />
          </div>
          <div class="auction-card-body">
            <p class="auction-card-subtitle">{product.subtitle}</p>
            <h3 class="auction-card-name">{product.name}</h3>
            <p class="auction-card-notes">{product.notes.slice(0, 3).join(' · ')}</p>
            <div class="auction-card-footer">
              <span class="auction-price">Mulai: {formatPrice(product.startingPrice)}</span>
              <span class="auction-arrow">→</span>
            </div>
          </div>
        </a>
      {/each}
    </div>

    <div style="text-align: center; margin-top: 48px;">
      <a href="/auction" class="btn-outline">Lihat Semua Auction</a>
    </div>
  </div>
</section>

<!-- aabout preview -->
<section class="about-preview">
  <div class="container">
    <div class="about-preview-header">
      <p class="section-label">Tentang Kami</p>
      <h2 class="section-title">Tentang Wandhe Coffee Estate</h2>
      <p class="section-subtitle" style="margin: 0 auto; text-align: center; max-width: 560px;">
        Komitmen kami terhadap kualitas dimulai dari tanah yang subur hingga cangkir terakhir yang Anda nikmati
      </p>
    </div>

    <div class="about-preview-layout">
      <div class="about-preview-text">
        <h3 class="about-philosophy-title">Filosofi Kami</h3>
        <p class="about-philosophy-body">
          Setiap tahap dalam perjalanan kopi, dari benih hingga seduhan, adalah bagian dari cerita yang lebih besar. Kami mengutamakan keberlanjutan, kualitas, dan hubungan yang bermakna dengan setiap orang yang terlibat dalam proses ini.
        </p>
        <p class="about-philosophy-body">
          Wandhe Coffee Estate berdiri di atas prinsip kesederhanaan yang elegan, di mana setiap detail diperhatikan tanpa kehilangan esensi keaslian.
        </p>
      </div>
      <div class="about-preview-image">
        <img src={image3} alt="Kebun kopi Wandhe Estate" />
      </div>
    </div>

    <div class="values-grid">
      <div class="value-card">
        <div class="value-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
            <path d="M17 8c0-2.76-2.24-5-5-5S7 5.24 7 8" stroke-linecap="round"/>
          </svg>
        </div>
        <h4 class="value-title">Keberlanjutan</h4>
        <p class="value-desc">Praktik ramah lingkungan dalam setiap aspek produksi</p>
      </div>
      <div class="value-card">
        <div class="value-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke-linejoin="round"/>
          </svg>
        </div>
        <h4 class="value-title">Kualitas Premium</h4>
        <p class="value-desc">Standar tinggi tanpa kompromi dalam setiap produk</p>
      </div>
      <div class="value-card">
        <div class="value-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke-linejoin="round"/>
          </svg>
        </div>
        <h4 class="value-title">Passion</h4>
        <p class="value-desc">Dedikasi penuh terhadap seni dan ilmu kopi</p>
      </div>
    </div>
  </div>
</section>

<!-- products preview -->
<section class="products-preview">
  <div class="container">
    <div class="products-preview-header">
      <div>
        <p class="section-label">Koleksi</p>
        <h2 class="section-title">Koleksi Produk Kami</h2>
        <p class="section-subtitle">Setiap varian memiliki karakteristik unik yang mencerminkan keahlian dan dedikasi kami</p>
      </div>
    </div>

    <div class="products-grid">
      {#each featuredProducts as product}
        <div class="product-card">
          <div class="product-card-img-wrap">
            <img src={product.image} alt={product.name} class="product-card-img" />
            <span class="product-species-badge">{product.species}</span>
          </div>
          <div class="product-card-body">
            <h3 class="product-card-name">{product.shortName}</h3>
            <p class="product-card-region">{product.region}</p>
            {#if product.notes.length > 0}
              <p class="product-card-notes">{product.notes.slice(0, 3).join(', ')}</p>
            {/if}
            <div class="product-card-footer">
              <span class="product-price">{formatPrice(product.price)}</span>
              <a href={`/products/${product.id}`} class="product-detail-link">
                Detail →
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div style="text-align: center; margin-top: 48px;">
      <a href="/products" class="btn-primary">Lihat Semua Produk</a>
    </div>
  </div>
</section>

<!-- cta banner-->
<section class="cta-banner">
  <div class="container cta-inner">
    <div>
      <h2 class="cta-title">Mulai Perjalanan Kopi Anda</h2>
      <p class="cta-subtitle">Temukan cita rasa yang sempurna untuk setiap momen istimewa</p>
    </div>
    <div class="cta-buttons">
      <a
        href="https://www.tokopedia.com/sumberwandhe"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 4h14l-1.5 9H6.5L5 4zm0 0L4 2H2M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
        Belanja di Tokopedia
      </a>
      <a href="/contact" class="btn-outline">Hubungi Kami</a>
    </div>
  </div>
</section>

<!-- reviews─ -->
<section class="reviews-section">
  <div class="container">
    <div style="text-align: center; margin-bottom: 60px;">
      <p class="section-label">Testimoni</p>
      <h2 class="section-title">Apa Kata Mereka</h2>
    </div>

    <div class="review-carousel">
      <button class="review-nav review-nav--prev" onclick={prevReview} aria-label="Previous review">
        ←
      </button>

      <div class="review-content">
        {#if homepageReviews[activeReview].image}
          <img
            src={homepageReviews[activeReview].image}
            alt="Review dari {homepageReviews[activeReview].author}"
            class="review-screenshot"
          />
        {/if}
        <blockquote class="review-quote">
          "{homepageReviews[activeReview].text}"
        </blockquote>
        <div class="review-author">
          <span class="review-name">— {homepageReviews[activeReview].author}</span>
          <span class="review-product">{homepageReviews[activeReview].product}</span>
        </div>
      </div>

      <button class="review-nav review-nav--next" onclick={nextReview} aria-label="Next review">
        →
      </button>
    </div>

    <div class="review-dots">
      {#each homepageReviews as _, i}
        <button
          class="dot"
          class:active={i === activeReview}
          onclick={() => activeReview = i}
          aria-label="Review {i + 1}"
        ></button>
      {/each}
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: calc(100vh - var(--nav-height));
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .hero-slide {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1.2s ease;
  }

  .hero-slide.active {
    opacity: 1;
  }

  .hero-dots {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 2;
  }

  .hero-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.6);
    background: transparent;
    cursor: pointer;
    padding: 0;
    transition: background 0.3s, border-color 0.3s;
  }

  .hero-dot.active {
    background: white;
    border-color: white;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(30, 18, 8, 0.6) 0%, rgba(30, 18, 8, 0.5) 100%);
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 0 24px;
    max-width: 700px;
  }

  .hero-label {
    font-family: var(--font-sans);
    font-size: 12px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--brown-200);
    margin-bottom: 24px;
  }

  .hero-title {
    font-family: var(--font-serif);
    font-size: clamp(2.8rem, 7vw, 5rem);
    font-weight: 500;
    color: var(--white);
    margin-bottom: 20px;
    line-height: 1.1;
  }

  .hero-subtitle {
    font-size: 17px;
    color: rgba(255, 255, 255, 0.75);
    margin-bottom: 40px;
    line-height: 1.6;
    font-style: italic;
  }

  .hero-cta {
    font-size: 14px;
    position: relative;
    z-index: 2;
  }

  .brand-story {
    padding: 100px 0;
    background: var(--white);
  }

  .brand-story-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  .brand-story-title {
    font-family: var(--font-serif);
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
    color: var(--brown-700);
    margin-bottom: 24px;
    line-height: 1.15;
  }

  .brand-story-body {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 16px;
  }

  .brand-story-image img {
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
  }

  /* auction */
  .auction-preview {
    padding: 100px 0;
    background: var(--brown-700);
  }

  .auction-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 56px;
  }

  .auction-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .auction-card {
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.12);
    overflow: hidden;
    transition: transform 0.3s ease, background 0.3s ease;
    display: block;
  }

  .auction-card:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.12);
  }

  .auction-card-img {
    aspect-ratio: 3/2;
    overflow: hidden;
  }

  .auction-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .auction-card:hover .auction-card-img img {
    transform: scale(1.04);
  }

  .auction-card-body {
    padding: 20px 22px 22px;
  }

  .auction-card-subtitle {
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--brown-200);
    margin-bottom: 8px;
  }

  .auction-card-name {
    font-family: var(--font-serif);
    font-size: 20px;
    color: var(--white);
    margin-bottom: 10px;
  }

  .auction-card-notes {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.55);
    margin-bottom: 18px;
  }

  .auction-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .auction-price {
    font-size: 14px;
    font-weight: 500;
    color: var(--brown-200);
  }

  .auction-arrow {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    transition: transform 0.2s;
  }

  .auction-card:hover .auction-arrow {
    transform: translateX(4px);
    color: var(--white);
  }

  /* ── About Preview ── */
  .about-preview {
    padding: 100px 0;
    background: var(--cream);
  }

  .about-preview-header {
    text-align: center;
    margin-bottom: 70px;
  }

  .about-preview-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px;
    align-items: center;
    margin-bottom: 80px;
  }

  .about-philosophy-title {
    font-family: var(--font-serif);
    font-size: 22px;
    color: var(--brown-700);
    margin-bottom: 20px;
  }

  .about-philosophy-body {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.85;
    margin-bottom: 16px;
  }

  .about-preview-image img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
  }

  /* Values */
  .values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .value-card {
    text-align: center;
    padding: 32px 24px;
    background: var(--white);
  }

  .value-icon {
    width: 56px;
    height: 56px;
    background: var(--cream-dark);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: var(--brown-500);
  }

  .value-title {
    font-family: var(--font-serif);
    font-size: 16px;
    color: var(--brown-700);
    margin-bottom: 10px;
  }

  .value-desc {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.6;
  }

  /* ── Products Preview ── */
  .products-preview {
    padding: 100px 0;
    background: var(--white);
  }

  .products-preview-header {
    margin-bottom: 56px;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  .product-card {
    border: 1px solid var(--cream-dark);
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .product-card:hover {
    box-shadow: 0 8px 32px rgba(92, 51, 23, 0.1);
  }

  .product-card-img-wrap {
    position: relative;
    aspect-ratio: 4/3;
    overflow: hidden;
  }

  .product-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .product-card:hover .product-card-img {
    transform: scale(1.04);
  }

  .product-species-badge {
    position: absolute;
    top: 14px;
    left: 14px;
    background: rgba(30, 18, 8, 0.72);
    color: var(--white);
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 4px 10px;
  }

  .product-card-body {
    padding: 20px 22px 22px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .product-card-name {
    font-family: var(--font-serif);
    font-size: 17px;
    color: var(--text-primary);
    margin-bottom: 6px;
  }

  .product-card-region {
    font-size: 12px;
    color: var(--text-muted);
    letter-spacing: 0.5px;
    margin-bottom: 10px;
  }

  .product-card-notes {
    font-size: 13px;
    color: var(--text-secondary);
    margin-bottom: 16px;
    font-style: italic;
  }

  .product-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }

  .product-price {
    font-size: 15px;
    font-weight: 600;
    color: var(--brown-600);
  }

  .product-detail-link {
    font-size: 13px;
    color: var(--brown-500);
    transition: color 0.2s;
  }

  .product-detail-link:hover {
    color: var(--brown-700);
  }

  /* ── CTA ── */
  .cta-banner {
    background: var(--brown-600);
    padding: 80px 0;
  }

  .cta-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }

  .cta-title {
    font-family: var(--font-serif);
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    color: var(--white);
    margin-bottom: 10px;
  }

  .cta-subtitle {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.7);
  }

  .cta-buttons {
    display: flex;
    gap: 16px;
    flex-shrink: 0;
  }

  .cta-buttons .btn-primary {
    background: var(--white);
    color: var(--brown-600);
  }

  .cta-buttons .btn-primary:hover {
    background: var(--cream);
  }

  /* ── Reviews ── */
  .reviews-section {
    padding: 100px 0;
    background: var(--cream);
  }

  .review-carousel {
    display: flex;
    align-items: center;
    gap: 32px;
    max-width: 800px;
    margin: 0 auto;
  }

  .review-nav {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border: 1px solid var(--brown-200);
    background: none;
    color: var(--brown-500);
    font-size: 18px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .review-nav:hover {
    background: var(--brown-600);
    color: var(--white);
    border-color: var(--brown-600);
  }

  .review-content {
    flex: 1;
    text-align: center;
  }

  .review-screenshot {
    width: auto;
    max-width: 320px;
    max-height: 200px;
    object-fit: cover;
    object-position: top;
    border-radius: 2px;
    margin: 0 auto 28px;
    display: block;
    box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  }

  .review-quote {
    font-family: var(--font-serif);
    font-size: clamp(1rem, 2.2vw, 1.25rem);
    font-style: italic;
    color: var(--text-primary);
    line-height: 1.7;
    margin-bottom: 28px;
  }

  .review-author {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .review-name {
    font-weight: 500;
    color: var(--brown-600);
    font-size: 15px;
  }

  .review-product {
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  .review-dots {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 36px;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--brown-200);
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    padding: 0;
  }

  .dot.active {
    background: var(--brown-600);
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .brand-story-inner,
    .about-preview-layout {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .auction-grid,
    .products-grid {
      grid-template-columns: 1fr 1fr;
    }

    .values-grid {
      grid-template-columns: 1fr 1fr;
    }

    .cta-inner {
      flex-direction: column;
      text-align: center;
    }

    .cta-buttons {
      justify-content: center;
    }
  }

  @media (max-width: 600px) {
    .brand-story,
    .auction-preview,
    .about-preview,
    .products-preview,
    .reviews-section {
      padding: 64px 0;
    }

    .cta-banner {
      padding: 56px 0;
    }

    .auction-grid,
    .products-grid,
    .values-grid {
      grid-template-columns: 1fr;
    }

    .hero-title {
      font-size: 2.4rem;
    }

    .review-carousel {
      gap: 16px;
    }

    .cta-buttons {
      flex-direction: column;
      width: 100%;
    }

    .cta-buttons a {
      justify-content: center;
    }
  }
</style>
