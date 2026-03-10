<script lang="ts">
  import { products } from '$lib/data/products';
  import {
    rNando, rDwi, rYogi, rBrian, rAdi, rMuhamad
  } from '$lib/assets/images';

  let name = $state('');
  let email = $state('');
  let message = $state('');
  let submitted = $state(false);
  let submitting = $state(false);

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (!name || !email || !message) return;
    submitting = true;
    setTimeout(() => {
      submitting = false;
      submitted = true;
      name = '';
      email = '';
      message = '';
    }, 900);
  }

  const selectedReviews = [
    {
      text: 'Aroma kopinya harum, pahit asamnya nyaman di lambung, kemasan baru sudah pakai zipper. Insha Allah bakal repeat order 😊',
      author: 'Nando',
      product: 'Excelsa Mossto Lot 13',
      rating: 5,
      image: rNando
    },
    {
      text: 'Rasa mantep. tinggal ikut resep seduh di kemasannya dijamin jos gandos',
      author: 'Dwi',
      product: 'Excelsa Mossto Lot 13',
      rating: 5,
      image: rDwi
    },
    {
      text: 'Seller Ramah, Fast Respon, Packaging okee, barangnyaa bagusss Original. Recomended Seller',
      author: 'Yogi',
      product: 'Excelsa Anjasmoro',
      rating: 5,
      image: rYogi
    },
    {
      text: 'Mantap kopinya 👌 terimakasih seller yg baik hati semoga diterima masukannya 🙏',
      author: 'Brian',
      product: 'Excelsa Anjasmoro',
      rating: 5,
      image: rBrian
    },
    {
      text: 'wangi. belum dicoba espresso nya. semoga enak. sebelumnya beli espresso beda jenis. Enak',
      author: 'Adi',
      product: 'House Blend 50:50',
      rating: 5,
      image: rAdi
    },
    {
      text: 'mantap kopinya, rekomen buat yg suka ngopi',
      author: 'Muhamad',
      product: 'Excelsa Anaerobic',
      rating: 5,
      image: rMuhamad
    }
  ];

  const faqs = [
    {
      q: 'Berapa lama pengiriman ke seluruh Indonesia?',
      a: 'Kami mengirim setiap Senin–Jumat (10.00–17.00 WIB) dan Sabtu (10.00–14.00 WIB). Estimasi pengiriman 2–5 hari kerja tergantung lokasi.'
    },
    {
      q: 'Apakah produk yang kami terima sudah di-roast fresh?',
      a: 'Ya, semua produk kami di-roast to order atau dalam batch kecil untuk memastikan kesegaran maksimal saat produk sampai ke tangan Anda.'
    },
    {
      q: 'Bisa minta rekomendasi kopi berdasarkan selera?',
      a: 'Tentu! Hubungi kami via WhatsApp atau form kontak, ceritakan preferensi rasa Anda (fruity, sweet, bold, dsb.) dan kami akan merekomendasikan yang paling sesuai.'
    },
    {
      q: 'Apakah tersedia pembelian dalam jumlah besar (wholesale)?',
      a: 'Tersedia untuk café, roastery, dan distributor. Hubungi kami untuk informasi harga wholesale dan minimum order.'
    },
    {
      q: 'Bagaimana cara menyimpan kopi agar tetap segar?',
      a: 'Simpan dalam wadah kedap udara, jauh dari sinar matahari langsung dan panas. Idealnya dikonsumsi dalam 2–4 minggu setelah tanggal roasting.'
    }
  ];
</script>

<svelte:head>
  <title>Contact Us – Wandhe Coffee Estate</title>
  <meta name="description" content="Hubungi Wandhe Coffee Estate – form kontak, WhatsApp, email, dan media sosial kami." />
</svelte:head>

<!-- ── header ── -->
<section class="contact-header">
  <div class="container">
    <p class="section-label">Kontak</p>
    <h1 class="contact-title">Hubungi Kami</h1>
    <p class="contact-subtitle">Kami senang mendengar dari Anda dan siap membantu perjalanan kopi Anda</p>
  </div>
</section>

<!-- ── contact ── -->
<section class="contact-main">
  <div class="container contact-grid">

    <!-- form -->
    <div class="contact-form-col">
      <h2 class="form-title">Kirim Pesan</h2>

      {#if submitted}
        <div class="success-message">
          <div class="success-icon">✓</div>
          <h3 class="success-title">Pesan Terkirim!</h3>
          <p class="success-body">Terima kasih telah menghubungi kami. Tim kami akan merespons dalam 1×24 jam.</p>
          <button class="btn-outline-dark" onclick={() => submitted = false} style="margin-top: 16px;">
            Kirim Pesan Lain
          </button>
        </div>
      {:else}
        <form class="contact-form" onsubmit={handleSubmit}>
          <div class="form-group">
            <label for="name" class="form-label">Nama Lengkap</label>
            <input
              id="name"
              type="text"
              class="form-input"
              placeholder="Nama Anda"
              bind:value={name}
              required
            />
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              id="email"
              type="email"
              class="form-input"
              placeholder="email@anda.com"
              bind:value={email}
              required
            />
          </div>

          <div class="form-group">
            <label for="message" class="form-label">Pesan</label>
            <textarea
              id="message"
              class="form-textarea"
              rows="5"
              placeholder="Tulis pesan Anda di sini..."
              bind:value={message}
              required
            ></textarea>
          </div>

          <button type="submit" class="btn-primary submit-btn" disabled={submitting}>
            {submitting ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
        </form>
      {/if}
    </div>

    <!-- info -->
    <div class="contact-info-col">
      <div class="info-block">
        <p class="info-heading">Informasi Kontak</p>
        <div class="info-items">
          <div class="info-item">
            <div class="info-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
            </div>
            <div>
              <p class="info-label">Email</p>
              <a href="mailto:info@wandhecoffeeestate.com" class="info-value">info@wandhecoffeeestate.com</a>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .99h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <p class="info-label">WhatsApp</p>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" class="info-value">+62 812-3456-7890</a>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <p class="info-label">Lokasi</p>
              <p class="info-value">Wandhe Coffee Estate, Jawa Timur, Indonesia</p>
            </div>
          </div>
        </div>
      </div>

      <div class="info-block">
        <p class="info-heading">Ikuti Kami</p>
        <div class="social-links">
          <a href="https://www.instagram.com/sumberwandhe" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Instagram
          </a>
          <a href="https://www.facebook.com/sumberwandhe" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            Facebook
          </a>
          <a href="https://www.tokopedia.com/sumberwandhe" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Tokopedia">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            Tokopedia
          </a>
        </div>
      </div>

      <div class="info-block">
        <p class="info-heading">Jam Operasional</p>
        <div class="hours-list">
          <div class="hours-row"><span>Senin – Jumat</span><span>10.00 – 17.00 WIB</span></div>
          <div class="hours-row"><span>Sabtu</span><span>10.00 – 14.00 WIB</span></div>
          <div class="hours-row closed"><span>Minggu</span><span>Libur</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── faq ── -->
<section class="faq-section">
  <div class="container">
    <div class="faq-header">
      <p class="section-label">FAQ</p>
      <h2 class="section-title">Pertanyaan yang Sering Ditanyakan</h2>
    </div>

    <div class="faq-grid">
      {#each faqs as faq}
        <details class="faq-item">
          <summary class="faq-q">{faq.q}</summary>
          <p class="faq-a">{faq.a}</p>
        </details>
      {/each}
    </div>
  </div>
</section>

<!-- ── testimoni ── -->
<section class="testimonials-section">
  <div class="container">
    <div class="test-header">
      <p class="section-label">Testimoni</p>
      <h2 class="section-title">Review Pelanggan</h2>
      <p class="section-subtitle">Cerita nyata dari para pencinta kopi yang telah merasakan karakter Wandhe</p>
    </div>

    <div class="reviews-masonry">
      {#each selectedReviews as review}
        <div class="review-card">
          {#if review.image}
            <img src={review.image} alt="Review dari {review.author}" class="review-screenshot" />
          {/if}
          <div class="review-stars">{'★'.repeat(review.rating)}</div>
          <p class="review-text">"{review.text}"</p>
          <div class="review-meta">
            <span class="review-author">— {review.author}</span>
            <span class="review-product-tag">{review.product}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .contact-header {
    padding: 80px 0 56px;
    background: var(--white);
    border-bottom: 1px solid var(--cream-dark);
  }

  .contact-title {
    font-family: var(--font-serif);
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--text-primary);
    margin-bottom: 14px;
  }

  .contact-subtitle {
    font-size: 15px;
    color: var(--text-muted);
    max-width: 480px;
    line-height: 1.7;
  }
 /*contact main */
  .contact-main {
    padding: 80px 0 100px;
    background: var(--white);
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 80px;
    align-items: start;
  }

  /* form */
  .form-title {
    font-family: var(--font-serif);
    font-size: 24px;
    color: var(--text-primary);
    margin-bottom: 32px;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-label {
    font-size: 12px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--text-secondary);
    font-family: var(--font-sans);
  }

  .form-input,
  .form-textarea {
    width: 100%;
    padding: 13px 16px;
    border: 1px solid var(--cream-dark);
    background: var(--white);
    font-family: var(--font-sans);
    font-size: 14px;
    color: var(--text-primary);
    transition: border-color 0.2s;
    outline: none;
    border-radius: 2px;
  }

  .form-input:focus,
  .form-textarea:focus {
    border-color: var(--brown-300);
  }

  .form-textarea {
    resize: vertical;
    min-height: 140px;
  }

  .submit-btn {
    align-self: flex-start;
    min-width: 160px;
    justify-content: center;
  }

  .submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .success-message {
    background: var(--cream);
    padding: 48px;
    text-align: center;
    border-top: 3px solid var(--brown-400);
  }

  .success-icon {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--brown-100);
    color: var(--brown-600);
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
  }

  .success-title {
    font-family: var(--font-serif);
    font-size: 22px;
    color: var(--brown-700);
    margin-bottom: 10px;
  }

  .success-body {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .contact-info-col {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .info-block {
    border-top: 1px solid var(--cream-dark);
    padding-top: 28px;
  }

  .info-heading {
    font-size: 11px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--brown-400);
    margin-bottom: 20px;
    font-family: var(--font-sans);
  }

  .info-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .info-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }

  .info-icon {
    width: 32px;
    height: 32px;
    border: 1px solid var(--brown-100);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--brown-400);
    margin-top: 2px;
  }

  .info-label {
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 3px;
  }

  .info-value {
    font-size: 14px;
    color: var(--text-primary);
    transition: color 0.2s;
  }

  a.info-value:hover {
    color: var(--brown-600);
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: var(--text-secondary);
    transition: color 0.2s;
  }

  .social-link:hover {
    color: var(--brown-600);
  }

  .hours-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .hours-row {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: var(--text-secondary);
  }

  .hours-row.closed {
    color: var(--text-muted);
  }

  /* faq */
  .faq-section {
    padding: 80px 0;
    background: var(--cream);
  }

  .faq-header {
    margin-bottom: 48px;
  }

  .faq-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }

  .faq-item {
    border-bottom: 1px solid var(--brown-100);
    padding: 24px 0;
  }

  .faq-item:nth-child(odd) {
    padding-right: 48px;
    border-right: 1px solid var(--brown-100);
  }

  .faq-item:nth-child(even) {
    padding-left: 48px;
  }

  .faq-q {
    font-family: var(--font-serif);
    font-size: 16px;
    color: var(--text-primary);
    cursor: pointer;
    list-style: none;
  }

  .faq-q::-webkit-details-marker {
    display: none;
  }

  details[open] .faq-q {
    color: var(--brown-600);
  }

  .faq-a {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.75;
    margin-top: 12px;
  }

  /* testimonials */
  .testimonials-section {
    padding: 80px 0 100px;
    background: var(--white);
  }

  .test-header {
    margin-bottom: 56px;
  }

  .reviews-masonry {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .review-card {
    background: var(--cream);
    padding: 28px;
    border-top: 3px solid var(--cream-dark);
    transition: border-color 0.2s;
  }

  .review-screenshot {
    width: 100%;
    height: auto;
    max-height: 180px;
    object-fit: cover;
    object-position: top;
    border-radius: 2px;
    margin-bottom: 16px;
    display: block;
  }

  .review-card:hover {
    border-top-color: var(--brown-300);
  }

  .review-stars {
    color: var(--brown-400);
    font-size: 14px;
    letter-spacing: 2px;
    margin-bottom: 14px;
  }

  .review-text {
    font-size: 14px;
    font-style: italic;
    color: var(--text-primary);
    line-height: 1.75;
    margin-bottom: 20px;
  }

  .review-meta {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .review-author {
    font-size: 13px;
    font-weight: 500;
    color: var(--brown-600);
  }

  .review-product-tag {
    font-size: 11px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  /* Responsive */
  @media (max-width: 900px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    .faq-grid {
      grid-template-columns: 1fr;
    }

    .faq-item:nth-child(odd) {
      padding-right: 0;
      border-right: none;
    }

    .faq-item:nth-child(even) {
      padding-left: 0;
    }

    .reviews-masonry {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 600px) {
    .contact-main,
    .faq-section,
    .testimonials-section {
      padding: 56px 0;
    }

    .reviews-masonry {
      grid-template-columns: 1fr;
    }

    .success-message {
      padding: 32px 20px;
    }
  }
</style>
